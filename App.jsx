// App.js
import React from 'react';
import './App.css';
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="app-container">
      {/* Video Background */}
      <video autoPlay muted loop className="video-background">
      <source src={`${import.meta.env.BASE_URL}videos/background.mp4`} type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="content-overlay">
        {/* Logo */}
        <img
      src={`${import.meta.env.BASE_URL}logo.png`}
      alt="Chad Driver Logo"
      className="logo animate-pulse"
/>

        {/* Title */}
        <h1 className="title">$DRIVE - Chad Driver</h1>
        <h1 className="title">7GCyiFQzTWbb9BiLbc4R7KRJZ92Z5y53BMH2XCPtpump</h1>

        {/* Description */}
        <p className="description">
          🏎️ Use the /drive command in Telegram to apply our signature<br />
          muscular arm steering wheel overlay to any image!
        </p>

        {/* Action Buttons */}
        <div className="button-container">
          <a
            href="https://x.com/drivechad"
            target="_blank"
            rel="noopener noreferrer"
            className="action-button twitter-button"
          >
            🚀 Twitter
          </a>

          <a
            href="https://dexscreener.com/solana/ekzieoujt2wzqrkfvbgya6zefvyv8qiewwzsqxmn1phv"
            target="_blank"
            rel="noopener noreferrer"
            className="action-button dexscreener-button"
          >
            📊 DexScreener
          </a>

          <a
            href="https://t.me/drivesolana"
            target="_blank"
            rel="noopener noreferrer"
            className="action-button telegram-button"
          >
            🤖 Telegram Bot
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
