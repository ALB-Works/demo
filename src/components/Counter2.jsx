import { useEffect, useState } from "react";    
function Counter(){
    const [score,setCount1]=useState(10);
    useEffect(()=>{console.log("score has been changed");},[score])
    

    return(
        <>
        <div>
        <h2>SCore</h2>
        <h1>Team A: {score}</h1>
        <h2></h2>
        <button onClick={()=>setCount1(score+10)}>
            Goal
        </button>
        <button onClick={()=>setCount1(score-5)}>
            penalty 
        </button>
        <button onClick={()=>setCount1(score*0)}>
            reset
        </button>
        


        </div>
        
        </>
    )
}
export default Counter;