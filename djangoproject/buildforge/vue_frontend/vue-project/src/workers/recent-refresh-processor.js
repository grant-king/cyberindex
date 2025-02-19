self.onmessage = async (event) => {
    const message = event.data;
    const endpoint = message[0];
    const token = message[1];
    
    const data = await fetchRecent(endpoint, token);
    postMessage(data);
};

async function fetchRecent(endpoint, token) {
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'X-CSRFToken': token,
        },
    })
    if (response.ok) {
        const data = await response.json()
        //console.log('recent', data)
        return data
    } else {
        console.error('failed to fetch recent')
        console.error(response)
    }
}