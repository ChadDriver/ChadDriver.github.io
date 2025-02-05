// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Video Background */}
      <video autoPlay muted loop className="video-background">
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Content Overlay */}
      <div className="content-overlay">
        {/* Logo */}
        <img 
          src="/logo.png" 
          alt="Chad Driver Logo" 
          className="logo animate-pulse" 
        />

        {/* Title */}
        <h1 className="title">$DRIVE - Chad Driver</h1>

        {/* Description */}
        <p className="description">
          🏎️ Use the /drive command in Telegram to apply our signature<br />
          muscular arm steering wheel overlay to any image!
        </p>

        {/* Action Buttons */}
        <div className="button-container">
          <a
            href="https://twitter.com/YourTwitterHandle"
            target="_blank"
            rel="noopener noreferrer"
            className="action-button twitter-button"
          >
            🚀 Twitter
          </a>

          <a
            href="https://dexscreener.com/solana/your-pair-address"
            target="_blank"
            rel="noopener noreferrer"
            className="action-button dexscreener-button"
          >
            📊 DexScreener
          </a>

          <a
            href="https://t.me/YourTelegramLink"
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