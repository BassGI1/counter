import React, {useState, useEffect} from "react";
import Box from "./Box.js";

class day{
    constructor(day) {
        this.colour = "white"
        this.day = day
    }
}

export default function Boxes({month}) {

    const numDays = month === 1 ? 28 : month%2 ? 30 : 31
    const [boxArray, setBoxArray] = useState(JSON.parse(localStorage.getItem('counterInfo')) || [])
    const [progress, setProgress] = useState(JSON.parse(localStorage.getItem('progress')) || {days: 0, score: 0})
    const [animate, setAnimate] = useState(() => false)

    useEffect(() => {
        if (boxArray.length !== numDays){
            setBoxArray([])
            for (let r = 0; r < numDays; ++r){
                setBoxArray(x => {
                    let y = [...x]
                    y.push(new day(r + 1))
                    return y
                })
            }
        }
    }, [numDays])

    return (

        <div className="boxes">
            {boxArray.length && boxArray.map(x => <Box colour={x.colour} day={x.day} boxArray={boxArray} setBoxArray={setBoxArray} progress={progress} setProgress={setProgress} key={x.day}/>)}

            <div className="progress">
                {`Progress: ${progress.score}/${progress.days}`}
            </div>

            <div style={{position: "absolute", left: "13vh", top: "5vh"}} className={`button ${animate ? "animate" : ''}`} onClick={() => {
                localStorage.setItem('counterInfo', JSON.stringify(boxArray))
                setProgress(x => {
                    let y = {...x}
                    ++y.days
                    return y
                })
                localStorage.setItem('progress', JSON.stringify(progress))
                setAnimate(true)
                setTimeout(() => setAnimate(false), 4000)
            }} >
                {animate ? "Saved!" : "Save"}
            </div>

        </div>

    )

}