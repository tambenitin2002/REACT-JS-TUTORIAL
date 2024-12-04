import React, { memo, useMemo } from "react";
const Count=()=>{
    const [count, setCount]=useState(0)
    const [init, setInit]=useState(0)

    const memo=useMemo(function initFunction(){
        console.log("initFuncyion");
        return init*5
        
    },[init])
    // function initFuncyion(){
    //     return init*5
    // }
    return(
        <div>
            <h1>Count:{count}</h1>
            <h1>Init:{init}</h1>
            {/* <h1>Init:{initFuncyion()}</h1> */}
            <h1>Init:{memo}</h1>

        <button onClick={()=>setCount(count+1)}>Count</button>
        <button onClick={()=>setInit(init+1)}>Init</button>
        </div>
    )
}
export default Count;