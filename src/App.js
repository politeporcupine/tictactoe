import Popup from './components/PP.js';
import {useState} from 'react';

function App(){
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="App">
      <main>
        <h1>
          Hello!
        </h1>
        <br></br>
        <button onClick={() => setButtonPopup(true)}>Open popup!</button>
        <Popup trigger ={buttonPopup} setTrigger={setButtonPopup}> 

        </Popup>
      </main>
    </div>
  )
}

export default App;