import './App.css'
import React from 'react'
import Card from './components/card/Card'
import Navbar from './components/navbar'
import html from './assets/html.png'
import js from './assets/js.png'
import css from './assets/css.png'

function App() {
  const [cards] = React.useState([
    { id: 1, imagem: html },
    { id: 2, imagem: js },
    { id: 3, imagem: css },
  ]);

  return (
    <>
      <div>
        <Navbar />
        <main>
          <div className='titulo'>
            <h1>Qual a Sua Escolha?</h1>
          </div>
          <div className='carousel'>
            {cards.map((card) => (
              <Card key={card.id} imagem={card.imagem} />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default App
