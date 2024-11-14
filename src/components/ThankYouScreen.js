// src/components/ThankYouScreen.js
import React, { useEffect } from "react";

const ThankYouScreen = ({ onTimeout }) => {
  useEffect(() => {
    const timer = setTimeout(onTimeout, 5000);
    return () => clearTimeout(timer);
  }, [onTimeout]);

  return (
    <div className="thank-you-screen">
      <h1>Thank you for your time!</h1>
      <p>Redirecting to the welcome screen...</p>
    </div>
  );
};

export default ThankYouScreen;
