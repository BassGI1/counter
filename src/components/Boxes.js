import React, {useState, useEffect} from "react";
import Box from "./Box.js";

class day{
    constructor(day) {
        this.colour = "white"
        this.day = day
    }
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export default function Boxes({month, dummy, setDummy}) {

    const numDays = month === 1 ? 28 : month < 7 ? month % 2 ? 30 : 31 : month % 2 ? 31 : 30
    const [boxArray, setBoxArray] = useState(JSON.parse(localStorage.getItem('counterInfo')) || [])
    const [progress, setProgress] = useState(JSON.parse(localStorage.getItem('progress')) || {days: 0, score: 0})
    const [animate, setAnimate] = useState(() => false)
    const [grow, setGrow] = useState(() => false)

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numDays])

    return (

        <div className="boxes">
            {boxArray.length && boxArray.map(x => <Box colour={x.colour} day={x.day} boxArray={boxArray} setBoxArray={setBoxArray} setProgress={setProgress} key={x.day}/>)}

            <div className={`progress ${grow ? "grow" : ""}`} onMouseEnter={() => {setGrow(true)}} onMouseLeave={() => setGrow(false)}>
                {!grow ? `Total: ${progress.score}/${progress.days}` : "How it Works: Red: -1, Yellow: 0, Green: +1"}
            </div>

            <div style={{position: "absolute", left: "13vh", top: "5vh"}} className={`button ${animate ? "animate" : ''}`} onClick={() => {
                if (boxArray[boxArray.length - 1].colour !== "white"){
                    let string = ""
                    for (let x = 0; x < numDays; ++x){
                        if (boxArray[x].colour === "rgb(186, 41, 41)"){
                            string += "r"
                        }
                        else if (boxArray[x].colour === "rgb(186, 128, 41)"){
                            string += "y"
                        }
                        else if (boxArray[x].colour === "rgb(41, 186, 41)"){
                            string += "g"
                        }
                        else{
                            string += "w"
                        }
                    }
                    if (dummy.length && !dummy[dummy.length - 1].key.includes(months[month])){
                        setDummy(x => {
                            let dum = [...x]
                            let obj = {key: `${months[month]} ${new Date().getFullYear()}`, record: string}
                            dum.push(obj)
                            console.log("black")
                            return dum
                        })
                    }
                    else if (!dummy.length){
                        setDummy([{key: `${months[month]} ${new Date().getFullYear()}`, record: string}])
                    }
                    localStorage.setItem('dummy', JSON.stringify(dummy))
                }
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