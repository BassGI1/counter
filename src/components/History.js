import React, {useState} from "react";
import Month from "./Month";

export default function History({setRenderHistory, dummy}) {

    const [popDown, setPopDown] = useState(() => false)
    const [renderMonth, setRenderMonth] = useState(() => false)
    const [month, setMonth] = useState({})

    const remove = () => {
        setPopDown(true)
        setTimeout(() => setRenderHistory(false), 1000)
    }

    return (

        <div style={{width: "100vw", height: "100vh", cursor: "default", position: "absolute", left: "0px", top: "0px", color: "white"}} >

            <div style={{position: "absolute", width: "100vw", height: "100vh", left: "0px", top: "0px", zIndex: "1"}} onClick={remove} ></div>

            <div className={`history popup ${popDown ? "popdown" : ''}`} style={{bottom: "5vh"}} >
            
                <nav className="historynav">
                    History
                    <div style={{position: "absolute", fontSize: "20px", left: "2vw", padding: "1vh", fontWeight: "bold", backgroundColor: "rgb(119, 122, 224)", border: "1px solid black", borderRadius: "1vh", cursor: "pointer"}} onClick={remove} >
                        return
                    </div>
                </nav>

                <div className="monthgrid">
                    {dummy.map(x => <div className="keymonth" style={{width: `${dummy.length > 6 ? "23vw" : "24.25vw"}`}} onClick={() => {
                        setMonth(x)
                        setRenderMonth(true)
                    }} >{x.key}</div>)}
                </div>

            </div>

            {renderMonth && <Month month={month} setRenderMonth={setRenderMonth} />}

        </div>

    )

}