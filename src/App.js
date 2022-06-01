import React, {useRef} from "react";
import Boxes from "./components/Boxes.js";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export default function App() {

  const month = useRef(new Date().getMonth())
  const day = useRef(new Date().getDate())
  const year = useRef(new Date().getFullYear())

  return (

    <div style={{height: "100vh", width: "100vw", backgroundColor: "rgb(225, 215, 215)"}}>

      <div style={{marginTop: "5vh", width: "100%", display: "flex", justifyContent: "center"}}>
        <h1 style={{fontWeight: "100"}}>{`${months[month.current]} ${day.current}, ${year.current}`}</h1>
      </div>

      <div>
        <Boxes month={month.current}/>
      </div>

    </div>

  )

}