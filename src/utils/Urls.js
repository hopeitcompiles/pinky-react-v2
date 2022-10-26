const HOST='https://www.api.pinkytest.com/'
const APP='app'
const getBaseURL=()=>{
    return `${HOST}`
}

const getAppURL=()=>{
    return `${HOST}${APP}`
}
export{
    getAppURL,getBaseURL
}
