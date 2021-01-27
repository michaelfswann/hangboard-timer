import React, { useEffect, useState } from 'react'

const exampleInput = {rest:120, hang:5, sets:6, prep: 15}

const Timer = () => {
    const [timer, setTimer] = useState({...exampleInput, activePhase: ''})
    const [countdown, setCountdown] = useState(4)
    
    useEffect( ()=>{
    const x = setInterval(()=> {
        if (countdown > 0) {
        setCountdown(countdown-1)
    }}, 1000)
    return () => {clearInterval(x)} })


    return (<div><p>{countdown} seconds</p></div>)
}

export default Timer;