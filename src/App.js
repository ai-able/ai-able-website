import React, { useEffect, useState } from "react";
import "./App.css";
import largeVideo from "./640x640.mp4";
import mediumVideo from "./500x500.mp4";
import smallVideo from "./300x300.mp4";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className="App">
      {windowWidth >= 640 && (
        <>
          <p>window width: {windowWidth}</p>
          <video autoplay="" loop="loop" muted="muted" plays-inline="">
            <source src={largeVideo} type="video/mp4" />
          </video>
        </>
      )}
      {windowWidth < 640 && windowWidth >= 500 && (
        <>
          <p>window width: {windowWidth}</p>
          <video autoplay="" loop="loop" muted="muted" plays-inline="">
            <source src={mediumVideo} type="video/mp4" />
          </video>
        </>
      )}
      {windowWidth < 500 && (
        <>
          <p>window width: {windowWidth}</p>
          <video autoplay="" loop="loop" muted="muted" plays-inline="">
            <source src={smallVideo} type="video/mp4" />
          </video>
        </>
      )}

      <h1 className="Header">ai-able</h1>
      <p className="Subtext">Build the habit of using AI</p>
      <br></br>
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
};

export default App;
