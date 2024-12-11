import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', () => {
  const base_url = window.location.origin
  const endpoint = `${base_url}/apiv1/projectregistrations/`
  const next_page = ref(`${endpoint}?page=1`)
  const project_list = ref([])
  
  async function fetchProjects() {
    if (next_page.value === null) {
      console.log('no more pages to fetch')
      return
    }
    console.log('fetching next page of projects')
    const response = await fetch(next_page.value, {
      method: 'GET',
      headers: {
        'X-CSRFToken': window.csrf_token,
      },
    })
    const data = await response.json()
    next_page.value = data.next
    
    // Fetch GitHub repository details for each project
    for (let project of data.results) {
      if (project.repository_url) {
        const repoDetails = await fetchRepositoryDetails(project.repository_url)
        if (repoDetails) {
          console.log(repoDetails)
          project.repo_details = repoDetails
          project.repository_name = repoDetails.name
          project.repository_description = repoDetails.description
          project.owner_data = repoDetails.owner
        }
      }
      project_list.value.push(project)
    }
  }

  async function fetchRepositoryDetails(repoUrl) {
    try {
      const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/)
      if (!match) {
        console.error(`Invalid GitHub URL: ${repoUrl}`)
        return null
      }
      const [_, owner, repo] = match
      const apiUrl = `https://api.github.com/repos/${owner}/${repo}`
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'djangoproject-frontend',
        },
      })
      if (!response.ok) {
        console.error(`Failed to fetch repo details: ${response.statusText}`)
        return null
      }
      return await response.json()
    } catch (error) {
      console.error(`Error fetching repository details: ${error}`)
      return null
    }
  }

  return { fetchProjects, project_list }
})
