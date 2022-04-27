import "./style.css"

import { useState } from "react";

const HowToPlay = () => {
  // let count = 0
  let [count, setCount] = useState(0);
  let [increament, setIncreament] = useState("jkgkjgkj");
  let [toggle, setToggle] = useState(false);

  /**
   * useState will return array
   * the first-item in the array is what we store as count
   * this first-item has been initialised to 0/99/null
   * the second-item is a function that we use to change the value of the first-item
   */

  /**
   * setCount
   *  - change the value of state
   *  - re-render
   */
  return (
    <section>
      <button className="how_to_play_button" onClick={(e) => setToggle(!toggle)}>How To Play</button>
      {/* <input
        type="text"
        placeholder="Type something"
        onChange={(e) => setIncreament(e.target.value)}
      /> */}
      {/* <p>{count}</p> */}
      {/* <p>{increament}</p> */}
      {/* <p className={"dropdown_" + toggle}>To get under way, click 'Start'.
Once you have started the quiz, type an answer into the box and either hit enter or click the submit button. If you are right, it will fill in the correct slot in the table.
Keep entering more answers until you've successfully completed the quiz - or the timer runs out.
If you do not want to play any more, just hit the 'Give up!' button. You can then reveal the answers you missed - or have another go.</p> */}
        {   toggle ? <p className={"dropdown_" + toggle}>To get under way, click 'Start'.
Once you have started the quiz, type an answer into the box and either hit enter or click the submit button. If you are right, it will fill in the correct slot in the table.
Keep entering more answers until you've successfully completed the quiz - or the timer runs out.
If you do not want to play any more, just hit the 'Give up!' button. You can then reveal the answers you missed - or have another go.</p>
    : ""

        }
    </section>
  );
};

export default HowToPlay;
