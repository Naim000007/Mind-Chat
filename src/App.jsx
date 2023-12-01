import { IoMdSend } from "react-icons/io";
import './App.css'

function App() {

  return (
    <div className="App">
     <section className="side-bar">
      <button>+New Chat</button>
      <ul className="history">
        <li>What is programming</li>
      </ul>
      <nav>
        <p>Made by Naim</p>
        {/* <img src='../src/Mind chat (1).png' alt="" /> */}
      </nav>
     </section>
     <section className="main">
      <h1 >Mind Chat </h1>
      <ul className='feed'>

      </ul>
      <div className="bottom-section">
        <div className="input-container">
          <input type="text" />
          <div id="submit"><IoMdSend /></div>
        </div>
        <p className="info">Thank you for the update on Chat Bot version 2.0, aiming to enhance AI interaction. Your feedback is valuable for continuous improvement. If you have specific requests or feedback, please share, and I'll assist accordingly.</p>
      </div>
     </section>
    </div>
  )
}

export default App