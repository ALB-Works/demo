import { useState } from "react";
function Counter(){
    const [score,setCount1]=useState(0);
    const [score2,setCount2]=useState(0);
    return(
        <>
        <div>
        <h2>SCore</h2>
        <h1>Team A: {score} Vs Team B:{score2}</h1>
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
        <h1></h1>
        <h2></h2>
        <button onClick={()=>setCount2(score2+10)}>
            Goal
        </button>
        <button onClick={()=>setCount2(score2-5)}>
            penalty
        </button>
        <button onClick={()=>setCount2(score2*0)}>
            reset
        </button>



        </div>
        
        </>
    )
}
export default Counter;