import React from "react";
import "./Modal.css";
import Sidebar from "../Sidebar";
import Content from "../Content";

function Modal({ title, topics, content, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h1>{title}</h1>
          <button className="close-button" onClick={onClose}>
            ✖
          </button>
        </div>
        <div className="modal-body">
          <Sidebar topics={topics} />
          <Content content={content} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
