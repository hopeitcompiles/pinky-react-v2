import axios from "axios"
import { getBaseURL } from "../utils/Urls"

const PAGINATION_SIZE=10
const base_url=getBaseURL()

const getElementsAsPageableList = async (page,search,path) => { 
    let parameter='?'
    parameter+=page!=='' && page?`page=${page}`:''
    
    parameter+=parameter!==''?'&':''
    parameter+=search!=='' && search?`search=${search}`:''

    parameter+=parameter!=='' && !parameter.endsWith("&")?'&':''

    parameter+=PAGINATION_SIZE?`size=${PAGINATION_SIZE}`:''
    const data = axios.get(`${base_url}${path}${parameter!=='?'?parameter:''}`).then(result => result.data)
    return data
}

export{getElementsAsPageableList}