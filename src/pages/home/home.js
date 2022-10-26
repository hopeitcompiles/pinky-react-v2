import { useContext } from 'react'
import { SessionContext } from '../../imports'

export default function Index() {
    const {sessionUser}=useContext(SessionContext)
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://stickershop.line-scdn.net/stickershop/v1/product/12530647/LINEStorePC/main.png;compress=true' 
          className="App-logo" alt="logo" />
        <h1>
          Wellcome to Pinky Test{sessionUser&&` ${sessionUser?.name}`}
        </h1>

      </header>
    </div>
  )
}
