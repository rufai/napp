import logo from './logo.svg';
import './App.css';

// import something from somewhere
 import { Top, p } from './Top';
//  import Top from './Top';
import John from './Side/john';
import Goat from './Side/goat';
import  './Side/goat.css';
import BbcHundredQuiz from './BbcHundredQuiz';

import Banks from './Banks';

const k = 4

let state = "bg-black"
const give9 = () => {return 9}
function App() {
  return (
    <div className="App">
      <BbcHundredQuiz />
      <div className={state === "bg-black" ? "bg-wine" : ""}>
        <p>{p}{ give9() }</p>
        <p>2+2</p>
        <p style={{backgroundColor : "red"}}>{2+2}</p>
        <p>The value of p is {k ? k : "nothing"}</p>
      </div>
      <Top />
      <John />
      <Goat> 
        <John /> 
        <a href=""  > Jimbo </a>
      </Goat>
      <p>dsfsfsdfdssd</p>
      <input type="text"  placeholder="won't you type here" />
      <Banks />
    </div>
  );
}

export default App;
