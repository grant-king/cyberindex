import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', () => {
  const base_url = window.location.origin
  const endpoint = `${base_url}/apiv1/projectregistrations/`
  const next_page = ref(`${endpoint}?page=1`)
  const project_list = ref([])
  const new_object_template = {
    repository_url: '',
    name: 'Fetch project details to populate',
    submission_date: 'Save to set datetime',
    last_updated: 'Save to set datetime',
    image_url: '/',
    repo_details: {
      owner: {
        login: '',
        avatar_url: '/',
      },
      license: {
        name: '',
      },
      name: '',
      description: '',
      html_url: '',
      homepage: '',
    },
  }
  const new_object_preview = ref(structuredClone(new_object_template))
  const show_preview = ref(false)
  
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
    project_list.value.push(...data.results)
    next_page.value = data.next
    
  }

  async function fetchRepositoryDetails(repo_url) {
    try {
      const match = repo_url.match(/github\.com\/([^/]+)\/([^/]+)/)
      if (!match) {
        console.error(`Invalid GitHub URL: ${repo_url}`)
        return null
      }
      const [_, owner, repo] = match
      const apiUrl = `https://api.github.com/repos/${owner}/${repo}`
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'civictechindex-frontend',
        },
      })
      if (!response.ok) {
        console.error(`Failed to fetch repo details: ${response.statusText}`)
        return null
      }
      show_preview.value = true
      return await response.json()
    } catch (error) {
      console.error(`Error fetching repository details: ${error}`)
      return null
    }
  }

  async function populateNewObjectPreview(repo_url) {
    const fetched_details = await fetchRepositoryDetails(repo_url)
    if (fetched_details) {
      //update the relevant fields in the new_object_preview
      new_object_preview.value.repository_url = repo_url
      new_object_preview.value.repo_details = fetched_details
      new_object_preview.value.name = fetched_details.name
      if (fetched_details.owner.avatar_url) {
        new_object_preview.value.image_url = fetched_details.owner.avatar_url
      }
      if (fetched_details.license) {
        new_object_preview.value.repo_details.license = fetched_details.license
      }
    }
  }

  async function submitNewProject() {
    // check if the new_object_preview is valid
    if (!new_object_preview.value.repository_url || !new_object_preview.value.name) {
      console.error('Invalid project submission')
      return
    }
    // make a POST request to the endpoint with the new_object_preview
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': window.csrf_token,
      },
      body: JSON.stringify(new_object_preview.value),
    })
    if (response.ok) {
      console.log('Project submitted successfully')
      // save the response project to the project_list
      const new_project = await response.json()
      project_list.value.push(new_project)
      // reset the new_object_preview
      new_object_preview.value = structuredClone(new_object_template)
      show_preview.value = false
    } else {
      console.error('Failed to submit project')
    }
  }

  return { fetchProjects, fetchRepositoryDetails, populateNewObjectPreview, submitNewProject, project_list, new_object_preview, show_preview }
})
