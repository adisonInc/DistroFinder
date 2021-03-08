import logo from './linux.png';
import './App.css';
import Question from './Question.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button id="butt"
          color="#841584"
          title="Learn More"
          onClick={console.log("kox")}>
            Reset
            </button>
        <p id="np">
          choose <big><b>YOUR</b></big> distro
        </p>
        <div id="lista" >
          <hr class="kox"></hr>
          <Question  name="1.What is your linux knowledge" one="I've never used linux" two="I have some knowledge" three="I am expirenced linux user"/>
          <hr class="kox"></hr>
          <Question name="2.What are your setting preference" one="I like out of the box settings" two="I want to customize somethigs" three="I want to do thigs my way"/>
          <hr class="kox"></hr>
          <Question name="3.Korzen Chuj" one="I Use" two="Arch" three="Btw"/>
          <hr class="kox"></hr>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
        </div>
        <div class="bot">
          <a href="http://www.gnu.com">Why linux?</a>
        </div>
      </header>
    </div>
  );
}

export default App;
