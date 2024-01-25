import { useState } from "react";
import "./coinStyle.css"

const CoinContainer=()=>{
    let [totalCount, setTotalCount]=useState(0);
    let [headCount, setheadCount]=useState(0);
    let [tailCount, setTailCount]=useState(0);
    let [number,setNumber]=useState(0);
    let [image, setImage]=useState("https://assets.ccbp.in/frontend/react-js/heads-img.png");
    const tossCoin=()=>{
        
        setNumber(Math.floor(Math.random()*2)+1)
        setTotalCount(totalCount+1);
        if(number=== 1){
            setheadCount(headCount+1)
            setImage("https://assets.ccbp.in/frontend/react-js/heads-img.png")

        } 
        else
        {
            setTailCount(tailCount+1)
            setImage("https://assets.ccbp.in/frontend/react-js/tails-img.png")
        }
        console.log(headCount,tailCount,totalCount);    
    }
    return(
        <div className="container">
            <h2>COIN TOSS GAME</h2>
            <p>heads (or) tails</p>
            <img src={image} alt="coin"/><br/>
            <button onClick={tossCoin}>toss</button>
            <p>Total: {totalCount} Head:  {headCount} tail: {tailCount}</p>
        </div>
    );

}

export default CoinContainer;