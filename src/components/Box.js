import React from "react";

const colours = ["rgb(186, 41, 41)", "rgb(186, 128, 41)", "rgb(41, 186, 41)"]

export default function Box({colour, day, boxArray, setBoxArray, progess, setProgress}) {

    return (

        <div className="box" style={{backgroundColor: colour, color: "black"}} onClick={() => {
            if (colour === colours[0]){
                boxArray.map(x => {
                    if (day === x.day){
                            setBoxArray(y => {
                                let arr = [...y]
                                arr[day - 1].colour = colours[1]
                                return arr
                            })
                    }
                    return x
                })
                setProgress(x => {
                    let y = {...x}
                    ++y.score
                    return y
                })
            }
            else if (colour === colours[1]){
                boxArray.map(x => {
                    if (day === x.day){
                            setBoxArray(y => {
                                let arr = [...y]
                                arr[day - 1].colour = colours[2]
                                return arr
                            })
                    }
                    return x
                })
                setProgress(x => {
                    let y = {...x}
                    y.score += 1
                    return y
                })
            }
            else if (colour === colours[2]){
                boxArray.map(x => {
                    if (day === x.day){
                            setBoxArray(y => {
                                let arr = [...y]
                                arr[day - 1].colour = colours[0]
                                return arr
                            })
                    }
                    return x
                })
                setProgress(x => {
                    let y = {...x}
                    y.score -= 2
                    return y
                })
            }
            else{
                boxArray.map(x => {
                    if (day === x.day){
                            setBoxArray(y => {
                                let arr = [...y]
                                arr[day - 1].colour = colours[2]
                                return arr
                            })
                    }
                    return x
                })
                setProgress(x => {
                    let y = {...x}
                    y.score += 1
                    return y
                })
            }
        }}>
            {day}
        </div>

    )

}