
import { useState } from "react"

const Timer = () => {
    let [startTime, setStartTime] =  useState(300)

    let END_TIME = "00:00"

    const triggerTimer = () => {
        
        const intervalKey =    setInterval(() =>{ 
            const currentStartTime = formatSecondsToMinute(startTime)
            if ( currentStartTime === END_TIME) {
                clearInterval(intervalKey)
            }
            else {
                setStartTime(--startTime)
            }
        }, 1000)
    }
    triggerTimer()

    let formatSecondsToMinute = ( secs ) => {
        let minute = `${parseInt( secs / 60 )}`
        minute = minute.length === 1 ? minute.padStart(2,"0") : minute
        let seconds = `${parseInt( secs % 60 )}`
        seconds = seconds.length === 1 ? seconds.padStart(2,"0") : seconds
        return `${minute}:${seconds}`
    }

    return (
        <section>
            <span className="score_tracker">{ formatSecondsToMinute( startTime )} </span>
        </section>
    )
}

export default Timer;