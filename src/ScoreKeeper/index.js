import "./style.css"
import { useState } from "react";
const ScoreKeeper = () => {
    let [score, setScore] = useState(0)

    return (
        <section>   
            <p>Score: <span className="score_tracker">{score}/32</span></p>
        </section>
    )
}

export default ScoreKeeper;