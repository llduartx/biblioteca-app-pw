import { useForm } from "react-hook-form"
import './Pesquisa.css'
import Titulo from './components/Titulo'
import { useState } from "react"

function Pesquisa() {
  const { register, handleSubmit } = useForm()
  const [livros, setLivros] = useState([])

  async function pesquisaLivros(data) {
    try {
      const resposta = await fetch("http://localhost:3000/livros")
      if (!resposta.ok) throw new Error("Erro ao consultar os livros")
      const dados = await resposta.json()
      const dados2 = dados.filter(livro => (
        livro.titulo.toUpperCase().includes(data.pesquisa.toUpperCase()) ||
        livro.genero.toUpperCase().includes(data.pesquisa.toUpperCase())
      ))
      if (dados2.length == 0) {
        alert("Não há livros com a palavra-chave no título ou gênero")
      } else {
        setLivros(dados2)
      }
    } catch (erro) {
      console.log("Erro: ", erro.message)
    }
  }

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
    <section className="tudopesq">
      <Titulo />
            <h1 className="titulopes" style={{ marginTop: 0 }}>Pesquisa de Livros</h1>
      <form className='form-pesquisa' onSubmit={handleSubmit(pesquisaLivros)}>
        <input
          type="text"
          className='campo-pesquisa'
          required
          placeholder="Palavra chave do título ou gênero"
          {...register("pesquisa")}
        />
        <input type="submit" value="Pesquisar" className='btn' />
      </form>

      <section className='grid-livros'>
        {listaLivros}
      </section>
      </section>
    </>
  )
}

export default Pesquisa