// src/components/ProgressIndicator.js
import React from "react";

const ProgressIndicator = ({ current, total }) => (
  <div className="progress-indicator">
    Question {current} of {total}
  </div>
);

export default ProgressIndicator;
