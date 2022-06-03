import React, {useEffect, useState} from "react";

export default function Month({month, setRenderMonth}) {

    const [loading, setLoading] = useState(1)

    useEffect(() => {
        setTimeout(() => setLoading(2), 1000)
        setTimeout(() => setLoading(3), 2000)
        setTimeout(() => setLoading(0), 3000)
    }, [])

    return (

        <div className="monthdiv">

            <h1 style={{fontSize: "50px"}}>{`${loading === 1 ? "Loading ." : loading === 2 ? "Loading . ." : loading === 3 ? "Loading . . . " : ''}`}</h1>

            {!loading && <div className="button" style={{position: "absolute", left: "13vh", top: "5vh", backgroundColor: "rgb(41, 99, 186)"}} onClick={() => setRenderMonth(false)} >Return</div>}

            {!loading &&

            <div style={{marginTop: "5vh"}}>

                <div style={{marginTop: "5vh", width: "100%", display: "flex", justifyContent: "center"}}>
                    <h1 style={{fontWeight: "100"}}>{`${month.key}`}</h1>
                </div>

                <div className="boxes">
                    {month.record.split('').map((col, ind) => <Box colour={col} index={ind + 1} key={ind} />)}
                </div>

            </div>}

        </div>

    )

}

const Box = ({colour, index}) => {

    return (

        <div className="box" style={{cursor: "default", backgroundColor: `${colour === 'g' ? "rgb(41, 186, 41)" : colour === 'y' ? "rgb(186, 128, 41)" : colour === 'r' ? "rgb(186, 41, 41)" : "white"}`}}>

            {index}

        </div>

    )

}