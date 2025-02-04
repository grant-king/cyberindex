onmessage = (e) => {
    const [voxel_pk, endpoint, token]  = e.data;
    const result = processClaim(voxel_pk, endpoint, token);
    postMessage(result);
    };

function processClaim(voxel_pk, endpoint, token) {
    console.log('worker processing claim:', voxel_pk, endpoint, token)
    const claim = createClaim(voxel_pk, endpoint, token)
    return 'claim processed by worker'
}

async function createClaim(voxel_pk, endpoint, token) {
    const form_data = new FormData()
    form_data.append('voxel', voxel_pk)
    form_data.append('is_holding', true)
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'X-CSRFToken': token,
        },
        body: form_data,
    })
    const data = await response.json()
    if (response.ok) {
        console.log('created claim', data)
        return data
    } else {
        console.error('failed to create claim')
        console.error(response)
    }
}