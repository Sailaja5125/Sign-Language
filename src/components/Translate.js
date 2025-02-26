import React from "react";

function Translate() {
  return (
    <div className="page-container">
      <h1>🌍 Sign Language Translation</h1>
      <p>Convert spoken or written language into sign language easily.</p>
      <img
        src="https://www.signsolutions.uk.com/wp-content/uploads/2021/06/Sign-Language-Services-1.jpg"
        alt="Sign Language Translator"
        className="image"
      />
      <div className="buttons-container">
        <button className="gradient-button">🖐️ Sign to Text</button>
        <button className="gradient-button">🎙️ Voice to Sign</button>
        <button className="gradient-button">📝 Text to Sign</button>
      </div>
    </div>
  );
}

export default Translate;
