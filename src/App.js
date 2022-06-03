import React, {useRef, useState} from "react";
import Boxes from "./components/Boxes.js";
import History from "./components/History.js";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export default function App() {

  const month = useRef(new Date().getMonth())
  const day = useRef(new Date().getDate())
  const year = useRef(new Date().getFullYear())
  const [renderHistory, setRenderHistory] = useState(() => false)
  const [dummy, setDummy] = useState(JSON.parse(localStorage.getItem('dummy')) ? JSON.parse(localStorage.getItem('dummy')) : [])

  return (

    <div style={{height: "100vh", width: "100vw", backgroundColor: "rgb(225, 215, 215)", zIndex: "-1"}}>

      <div style={{marginTop: "5vh", width: "100%", display: "flex", justifyContent: "center"}}>
        <h1 style={{fontWeight: "100"}}>{`${months[month.current]} ${day.current}, ${year.current}`}</h1>
      </div>

      <div>
        <Boxes month={month.current} dummy={dummy} setDummy={setDummy} />
      </div>

      <div className="button" style={{position: "absolute", left: "13vh", bottom: "5vh", backgroundColor: "rgb(41, 99, 186)"}} onClick={() => setRenderHistory(true)} >
        History
      </div>

      {renderHistory && <History setRenderHistory={setRenderHistory} dummy={dummy} />}

    </div>

  )

}