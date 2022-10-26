import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import cardStyle from "../css/GameCard.module.css"
import { GameFilesCard } from "./GameFilesCard"

export default function GameCard(parameter) {
    const [game,setGame]=useState(parameter.parameter)
    const [image,setImage]=useState(`https://i.imgur.com/oYiTqum.jpg`)
    const [authorImage,setAuthorImage]=useState(`https://i.imgur.com/7D7I6dI.png`)
    
    useEffect(()=>{
        if(game?.image){
          setImage(game.image)
        }
        if(game?.author?.id){
            setAuthorImage(game.author.image)
        }
      },[game])

    return (
    <section>
    <div className={cardStyle.cards}>
        <div className={cardStyle.card}>
          <img src={image}   className={cardStyle.card__image} alt="" />
          <div className={cardStyle.card__overlay}>
            <div className={cardStyle.card__header}>
              <svg className={cardStyle.card__arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
              <img className={cardStyle.card__thumb} 
               src={authorImage} alt={game.title} />
              
                <div className={cardStyle.card__header_text}>
                <Link to={`/games/${game.id}`} className={cardStyle.link}><h3 className={cardStyle.card__title}>{game.title}</h3></Link>
                <Link to={`/user/${game?.author?.id}`} className={cardStyle.link}> <span className={cardStyle.card__status}>by {game.author?.name} {game.author?.lastName}</span></Link>
                </div>
            </div>
            <p className={cardStyle.card__description}>{game.about}
            <br/>{game.description}<br/></p>
            <p><span>&nbsp;{game?.views?`${game.views} views`:'Be the first to play this game'}</span>
            <br/>&nbsp;Game made with {game.type}</p>
            <GameFilesCard gameFiles={game.gameFiles} type={game.type}/>
            {/* <Dropzone drop_text={'image or game file'} change_funct={update_file_function} 
            onChange={updateGameInfo} multiple={false}/> */}
          </div>
        </div>      
      </div>
    </section>
  )
}
