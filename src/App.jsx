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

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, imagem: html },
    { id: 2, imagem: js },
    { id: 3, imagem: css },
    { id: 4, imagem: react },
    { id: 5, imagem: node },
    { id: 6, imagem: docker },
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

      const [isModalOpen, setIsModalOpen] = useState(false);
      const [modalContent, setModalContent] = useState({
        title: "HTML",
        topics: [
          "Estruturais",
          "Textuais",
          "Mídias",
          "Formulários",
          "Tabelas",
          "Semânticas",
        ],
        content: [
          { tag: "<html>", description: "Define o escopo do HTML" },
          { tag: "<body>", description: "Corpo do HTML" },
          { tag: "<div>", description: "Divisória" },
        ],
      });

      const openModal = () => {
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
                    <Card imagem={card.imagem} onClick={openModal} />
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
