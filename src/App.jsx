import './App.css'
import Card from './components/card/Card'
import Navbar from './components/navbar'
import html from './assets/html.png'
import js from './assets/js.png'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <main>
          <div className='titulo'>
            <h1>Qual a Sua Escolha?</h1>
          </div>
          <div className='carousel'>
            <Card imagem={html} />
            <Card imagem={js} />
            <Card />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
