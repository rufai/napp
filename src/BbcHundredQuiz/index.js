import "./style.css"
import HowToPlay from "../HowToPlay";
import ScoreKeeper from "../ScoreKeeper";
import Timer from "../Timer";

const BbcHundredQuiz = () => {
    return (
        <section>
            <h2>Can you name the players with 100 Premier League goals?</h2>
            <HowToPlay />
            <section className="update_quiz">
                <ScoreKeeper />
                <Timer />                
            </section>
        </section>
    )
}

export default BbcHundredQuiz;