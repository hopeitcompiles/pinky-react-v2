import { getBaseURL } from "../utils/Urls"
import { getElementsAsPageableList } from "./QueryService"
import axios from 'axios'

const BASE_URL=getBaseURL()

const getGameList=(page,search)=> {
    return getElementsAsPageableList(page,search,'public/games')
}
const getGameInfoById=async (gameId)=>{
    let url= BASE_URL+'public/games/info/'+gameId    
    const response = await axios.get(url).then(result => result)
    return response
  }

const getGameFilesById=async (gameId)=>{
    let url= BASE_URL+'public/games/files/'+gameId    
    const response = await axios.get(url).then(result => result)
    return response
  }

export{getGameList,getGameFilesById,getGameInfoById}