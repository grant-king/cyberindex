import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePixeldanceStore = defineStore('pixeldance', () => {
    const pixeldance_list = ref([]) // for animating newly recorded and fetched pixeldances
    const base_url = window.location.origin
    const endpoint = `${base_url}/apiv1/dancers/`
    const next_page = ref(`${endpoint}?page=1`)
    const path_endpoint = `${base_url}/apiv1/dancepaths/`
    const communal_dancers = ref([]) // dancers with detail endpoint urls for fetching related dance paths
    const my_dancer_list = ref([]) // dancers created by the user
    const dancer_load_hold = ref([]) // latest fetched dancers with that need related paths to be fetched and loaded for animation
    const dancer_paths_hold = ref([])
    const new_dancer_preview = ref({}) // next dancer object to be created
    const new_path_preview = ref({}) // next dance path object to be created

    async function fetchDancers() {
        if (next_page.value === null) {
            console.log('no more pages to fetch')
            return
        }
        console.log('fetching next page of dancers')
        const response = await fetch(next_page.value, {
            method: 'GET',
            headers: {
                'X-CSRFToken': window.csrf_token,
            },
        })
        const data = await response.json()
        if(response.ok){
            dancer_load_hold.value.push(...data.results)   
            next_page.value = data.next
        } else {
            console.error('failed to fetch dancers')
            console.error(response)
        }
    }

    async function fetchDancerPaths(dance_endpoint) {
        console.log('fetching paths for dancer', dance_endpoint)
        const dance_path_endpoint = `${dance_endpoint}paths/`
        const response = await fetch(dance_path_endpoint, {
            method: 'GET',
            headers: {
                'X-CSRFToken': window.csrf_token,
            },
        })
        const data = await response.json()
        if(response.ok){
            dancer_paths_hold.value.push(...data) // this action endpoint is a plain list
        } else {
            console.error('failed to fetch paths for dancer')
            console.error(response)
        }
    }

    async function createDancer() {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': window.csrf_token,
            },
            body: JSON.stringify(new_dancer_preview.value),
        })
        if (response.ok) {
            const data = await response.json()
            my_dancer_list.value.push(data)
            console.log('Dancer created successfully')
            return data
        } else {
            console.error('Failed to create dancer')
            console.error(response)
        }
    }

    async function createDancePath() {
        const response = await fetch(path_endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': window.csrf_token,
            },
            body: JSON.stringify(new_path_preview.value),
        })
        if (response.ok) {
            const data = await response.json()
            console.log('Dance path created successfully')
            return data
        } else {
            console.error('Failed to create dance path')
            console.error(response)
        }
    }

    async function load_communal_dances_page() {
        // load next page of dancers
        await fetchDancers()
        // for each dancer detail endpoint, fetch related dance paths
        for (let dancer_data of dancer_load_hold.value){
            await fetchDancerPaths(dancer_data.url)
            // then wrangle that dance and paths into pixeldance_list for animation
            store_dance_from_db(dancer_paths_hold.value, dancer_data.color)
            // clear the dancer_load_hold and dancer_paths_hold
            dancer_load_hold.value = []
            dancer_paths_hold.value = []
        }
    }

    async function store_dance_from_db(dance_paths, color) { 
        console.log(dance_paths)
        console.log(color)

        const dance = {}
        dance.idx = pixeldance_list.value.length
        dance.color = color
        dance.x = dance_paths[0].start_x
        dance.y = dance_paths[0].start_y
        dance.current_path = 0
        dance.start_timestamp = null
        dance.total_paths = dance_paths.length
        dance.paths = dance_paths
    
        pixeldance_list.value.push(dance)
        console.log(pixeldance_list.value)
    }

    async function store_dance_from_recording(dance_paths, color) {
        const dance = {}
        dance.idx = pixeldance_list.value.length
        dance.color = color
        dance.x = dance_paths[0].start_x
        dance.y = dance_paths[0].start_y
        dance.current_path = 0
        dance.start_timestamp = null
        dance.total_paths = dance_paths.length
        dance.paths = dance_paths

        pixeldance_list.value.push(dance)
        console.log(pixeldance_list.value)
    }

    async function save_dance_from_recording(dance_paths, color) {
        new_dancer_preview.value = {
            color: color,
        }

        const dancer = await createDancer()
        if (dancer) {
            console.log(dancer)
            for (let i = 0; i < dance_paths.length; i++) {
                new_path_preview.value = {
                    dancer: dancer.url,
                    start_x: Math.floor(dance_paths[i].start_x),
                    start_y: Math.floor(dance_paths[i].start_y),
                    end_x: Math.floor(dance_paths[i].end_x),
                    end_y: Math.floor(dance_paths[i].end_y),
                    delta_x: Math.floor(dance_paths[i].delta_x),
                    delta_y: Math.floor(dance_paths[i].delta_y),
                    event_timestamp: Math.floor(dance_paths[i].event_time),
                    click_time_delta: Math.floor(dance_paths[i].click_time_delta),
                }
                await createDancePath()
            }
        }
    }

    async function collect_recording(dance_paths, color) {
        store_dance_from_recording(dance_paths, color)
        save_dance_from_recording(dance_paths, color)
    }

    function step(timestamp, dance) {
        if (!dance.start_timestamp) {
            dance.start_timestamp = timestamp
        }
        const elapsed_time = timestamp - dance.start_timestamp

        const shift_x = (dance.paths[dance.current_path].delta_x / 2000) * elapsed_time
        const shift_y = (dance.paths[dance.current_path].delta_y / 2000) * elapsed_time

        dance.x = dance.paths[dance.current_path].start_x + shift_x
        dance.y = dance.paths[dance.current_path].start_y + shift_y

        //animate each path according to durations btw events as recorded
        if (elapsed_time < dance.paths[dance.current_path].click_time_delta) {
            window.requestAnimationFrame((timestamp) => step(timestamp, dance))
        }
        else {
            dance.current_path += 1
            dance.start_timestamp = null
            if (dance.current_path == dance.total_paths) {
                dance.current_path = 0
            }
            animate_next_path(dance)
        }
    }

    function animate_next_path(dance) {
        const zero = document.timeline.currentTime
        window.requestAnimationFrame((timestamp) => step(zero, dance))
    }

    function animate_dance(dance_idx) {
        const dance = pixeldance_list.value[dance_idx]
        animate_next_path(dance)
    }

    function animate_all_dances() {
        for (let i = 0; i < pixeldance_list.value.length; i++) {
            animate_dance(i)
        }
    }

    return {
        pixeldance_list, communal_dancers, load_communal_dances_page, collect_recording, animate_dance, animate_all_dances
    }
})
