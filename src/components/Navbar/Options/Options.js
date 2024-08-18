import React from 'react';
import Icon from "./icons/SvgIcon1";
import "./Options.css";

function Options({ isOpen, onClose }) {
  return (
    <div className={`opt-container ${isOpen ? 'open' : ''}`}>
      {/* <button className="close-button" onClick={onClose}>✕</button> */}
      <p className="opt-item">List your practice</p>
      <div className="divider" />
      <p className="opt-item">For Employers</p>
      <div className="divider" />
      <p className="opt-item">Courses</p>
      <div className="divider" />
      <p className="opt-item">Books</p>
      <div className="divider" />
      <p className="opt-item">Speakers</p>
      <div className="divider" />
      <p className="opt-item">Doctors</p>
      <div className="divider" />
      <p className="opt-item">Login / Signup</p>
      <Icon className="icon" />
    </div>
  );
}

export default Options;