import { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Button, ProgressBar } from "react-bootstrap";
import cardStyle from "../css/GameFrame.module.css"
import { Loading } from "../../../imports";

export default function GameFrame({files}) {
    const [error,setError]=useState('')
    
    const { unityProvider, isLoaded, loadingProgression,requestFullscreen } = useUnityContext({
      loaderUrl: files?.loader,
      dataUrl: files?.data,
      frameworkUrl: files?.framework,
      codeUrl: files?.wasm,
    });    
    
    // We'll round the loading progression to a whole number to represent the
    // percentage of the Unity Application that has loaded.
    const loadingPercentage = Math.round(loadingProgression * 100);

    useEffect(()=>{
      if(!files?.loader || !files?.data || !files?.framework || !files?.wasm){
        setError("There's some files missing for this game")
      } 

      return function clean(){
        document.location.reload(false)
      }
    },[])

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }
  if(error!==''){
    return <h1>{error}</h1>
  }
    return (
      <div className={cardStyle.container_game}>
        {isLoaded === false && (
          // We'll conditionally render the loading overlay if the Unity
          // Application is not loaded.
          <div className={cardStyle.loading}>
            <Loading/>
            <p>{loadingPercentage} %</p>
            <ProgressBar now={loadingPercentage}/>
          </div>
        )}
        <div>
          <Unity className={cardStyle.frame}
            unityProvider={unityProvider}
            devicePixelRatio={devicePixelRatio}
          />
          </div>
          <Button onClick={handleClickEnterFullscreen}>Full Screen</Button>  
        </div>
    );
  }