onmessage = (e) => {
    const { claim } = e.data;
    const result = processClaim(claim);
    postMessage(result);
    };

function processClaim(claim) {
    console.log('worker processing claim:', claim)
    //const { voxel_pk } = claim
    //createClaim(voxel_pk)
    return 'claim processed by worker'
}