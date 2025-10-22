import './App.css'
import Titulo from './components/Titulo'
import { useEffect, useState } from 'react'

function App() {

  const [livros, setLivros] = useState([])

  useEffect(() => {
    async function buscarLivros() {
      const resposta = await fetch("http://localhost:3000/livros")
      const dados = await resposta.json()
      setLivros(dados)
    }
    buscarLivros()
  }, [])

  const listaLivros = livros.map(livro => (
    <section className='card__livros' key={livro.id}>
      <img src={livro.imagem} alt={`Capa: ${livro.titulo}`} />
      <div className='card__info'>
        <h2 className='titulol'>{livro.titulo}</h2>
        <h3 className='genero'>{livro.genero}</h3>
        <h4 className='autor'>{livro.autor}</h4>
        <h4 className='editora'>{livro.editora}</h4>
        <h5 className='lancamento'>Ano: {livro.lancamento}</h5>
        <h5 className='preco'>R$ {livro.preco}</h5>
        <p className='p-sinopse'>{livro.sinopse}</p>
      </div>
    </section>
  ))

  return (
    <>
      <div className='titulotopo'>
        < Titulo />
      </div>
      <h1 className='titulo__lista'>Livros Disponíveis</h1>
      <div className='lista__cards'>
        {listaLivros}
      </div>
    </>
  )
}

export default App
