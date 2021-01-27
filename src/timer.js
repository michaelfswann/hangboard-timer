import React, { useEffect, useState } from 'react'

const exampleInput = {rest:120, hang:5, sets:6, prep: 4}

const Timer = () => {
    const [timer, setTimer] = useState({...exampleInput, phase:1})
    const [countdown, setCountdown] = useState(exampleInput.prep)
    
    useEffect( ()=>{
    const x = setInterval(()=> {
        if (countdown > 0) {
        setCountdown(countdown-1)
    } else if (timer.phase !==2) {
        setTimer({...timer, phase: 2})
    }


}, 1000)
    return () => {clearInterval(x)} })


    return (<div><p>{countdown} seconds</p></div>)
}

export default Timer;