import "./App.css";
import React, { useState } from "react";
import Card from "./components/card/Card";
import Navbar from "./components/navbar";
import html from "./assets/html.png";
import js from "./assets/js.png";
import css from "./assets/css.png";
import react from "./assets/react.png";
import node from "./assets/node.svg";
import docker from "./assets/docker.png";
import Modal from "./components/modal/Modal";
import { getContent } from "./components/content/Contents";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});


  const cards = [
    { id: 1, imagem: html, assunto: "html" },
    { id: 2, imagem: js, assunto: "javascript" },
    { id: 3, imagem: css, assunto: "css" },
    { id: 4, imagem: react, assunto: "react" },
    { id: 5, imagem: node, assunto: "node" },
    { id: 6, imagem: docker, assunto: "devops" },
  ];

  const totalSlides = Math.ceil(cards.length / 3);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };


  const openModal = (assunto) => {
    const content = getContent(assunto); 
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div>
        <Navbar />
        <main>
          {isModalOpen && (
            <Modal
              title={modalContent.title}
              topics={modalContent.topics}
              content={modalContent.content}
              onClose={closeModal}
            />
          )}
          <div className="titulo">
            <h1>Qual a Sua Escolha?</h1>
          </div>
          <div className="carousel-container">
            <button className="carousel-button prev" onClick={handlePrevClick}>
              ◀
            </button>
            <div className="carousel">
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {cards.map((card) => (
                  <div key={card.id} className="carousel-slide">
                    <Card imagem={card.imagem} onClick={() => openModal(card.assunto)} />
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-button next" onClick={handleNextClick}>
              ▶
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
