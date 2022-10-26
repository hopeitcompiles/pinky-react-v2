import {useEffect, useState} from 'react'
import {Pagination,Loading } from "../../../imports"
import { getGameList } from "../../../service/GameService"
import GameCard from "../components/GameCard"
import cardStyle from "../css/GameCard.module.css"

export default function GameList() {
    const [pagination,setPagination]=useState(null)
    const [games,setGames]=useState(null)

    const loadGames=async (page) =>{
        try{
			const response= await getGameList(page)
			if(response){
                const page_info={
                    "current":response.number+1,
                    "total_pages":response.totalPages,
                    "total_items":response.totalElements,
                    "showing":response.numberOfElements,
                    "last":response.last,
                    "first":response.first
                }
                setPagination(page_info)
                setGames(response.content)
			}
		}catch(er){
		}
    }
    useEffect(()=>{
        loadGames()
        console.log('update')
    },[]);

  return (
    <section>
            <div className={cardStyle.container_card}>
            {/* <ListModeChanger leftOption={{icon:<AddIcon size={30}/>,
                text:'Add game', action:()=>setShowModalForm(true)}}/> */}
            {games?.length>0?
            (
                games?.map((game) =>(
                    <div key={game.id}>
                        <GameCard parameter={game}/>
                    </div>
                ))
            ):
            <div>Nothing to show</div>
            }
            </div>
            {/* {showModalForm&&
                <Modal title={"Register a game"} setClose={()=>handleClose()}>
                    <AddGameForm game_edit={null} on_success={null}/>
                </Modal>
            } */}
        </section>
  )
}
