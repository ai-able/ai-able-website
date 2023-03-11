import "./App.css";
import video from "./640x640.mp4";

function App() {
  return (
    <div className="App">
      <video
        autoplay=""
        loop="loop"
        id="video-background-7608"
        muted="muted"
        plays-inline=""
        poster=""
      >
        <source src={video} type="video/mp4" />
      </video>

      <h1 >ai-able</h1>
      <p>Build the habit of using AI</p>
      <a
        className="App-link"
        href="https://chrome.google.com/webstore/category/extensions"
        target="_blank"
        rel="noopener noreferrer"
      >
        Install the Chrome extension
      </a>
    </div>
  );
}

export default App;
