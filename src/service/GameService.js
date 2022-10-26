import { getElementsAsPageableList } from "./QueryService"

const getGameList=(page,search)=> {
    return getElementsAsPageableList(page,search,'public/games')
}

export{getGameList}