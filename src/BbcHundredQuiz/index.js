import "./style.css"
import HowToPlay from "../HowToPlay";
import ScoreKeeper from "../ScoreKeeper";
import Timer from "../Timer";
import QuizInput from "../QuizInput";

import { useState } from "react";

const BbcHundredQuiz = () => { 
    let [startCountDown, setStartCountDown] = useState(false)
    /**
     * 
     * @param {boolean} isQuizStarted 
     */
    const startQuiz = (isQuizStarted) => {
        console.log("Start Quiz has been called : " + isQuizStarted)
        setStartCountDown(isQuizStarted)
    }

    return (
        <section>
            <h2>Can you name the players with 100 Premier League goals?</h2>
            <HowToPlay />
            <section className="update_quiz">
                <ScoreKeeper />
                <Timer  shouldStartCountDown={startCountDown}/>                
            </section>
            <section>
                <QuizInput startQuiz={startQuiz}/>
            </section>
        </section>
    )
}

export default BbcHundredQuiz;

/**
 * Click on button in QuizInput
 * QuizInput ( child ) will data to BBCHundred ( parent )
 * BBcHundred ( parent ) will pass to Timer( child )
 * Timer ( will start counting)
 */