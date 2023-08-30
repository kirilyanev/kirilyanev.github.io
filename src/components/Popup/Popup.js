// Popup.js
import React, { useState } from 'react';
import './Popup.css';

function Popup() {
  const [showPopup, setShowPopup] = useState(true);

  // Function to hide the popup
  const hidePopup = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="popup">
        <div className="popup-content">
          <p>This website is in the early stage of development</p>
          <button onClick={hidePopup}>OK</button>
        </div>
      </div>
    )
  );
}

export default Popup;
