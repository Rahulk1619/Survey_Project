// src/components/ConfirmDialog.js
import React from "react";

const ConfirmDialog = ({ onConfirm, onCancel }) => (
  <div className="confirm-dialog">
    <p>Are you sure you want to submit the survey?</p>
    <button onClick={onConfirm}>Yes</button>
    <button onClick={onCancel}>No</button>
  </div>
);

export default ConfirmDialog;
