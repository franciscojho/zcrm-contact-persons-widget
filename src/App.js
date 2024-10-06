import { useEffect } from 'react';
import { ZOHO } from './vendor/ZSDK';
import './App.css';

function App() {

  useEffect(() => {
    async function init() {
      console.log("BEFORE PAGELOAD");
      await ZOHO.embeddedApp.on("PageLoad",function(data) {
        console.log("PageLoad", data);
      })
      console.log("AFTER PAGELOAD");
      return await ZOHO.embeddedApp.init();
    }
    init();
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
