import Titulo from "./components/Titulo";
import { useForm } from 'react-hook-form'
import './Inclusao.css'

export default function Inclusao() {

  // Hook Form Contents ----------------------------------------------------- 
  const { register, handleSubmit, reset, setFocus } = useForm()


  // Route API Create data --------------------------------------------------
  async function incluiLivro(data) { // Async function
    try {

      const resposta = await fetch("http://localhost:3000/livros", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!resposta.ok) throw new Error("Erro ao Adicionar Livro");
      const novoLivro = await resposta.json();
      console.log('Adicionado: ', novoLivro)
      alert('✅ Ok Livro Cadastrado com Sucesso')
      setFocus("titulo")
      reset()

    } catch (error) {
      console.error('Catch - Erro: ', error.message);
    }
  }


  return (
    <div className="container">
      <Titulo />
      <h1 className="inclu">Inclusão de Livro</h1>

      <form onSubmit={handleSubmit(incluiLivro)}>
        <p className="alinhar">
          <label htmlFor="titulo">Título:</label>
          <input type="text" name='titulo' id='titulo' required {...register("titulo")} />
        </p>
        <p className="alinhar">
          <label htmlFor="genero">Genero:</label>
          <input type="text" name='genero' id='genero' required {...register("genero")} />
        </p>
        <p className="alinhar">
          <label htmlFor="autor">Autor:</label>
          <input type="text" name='autor' id='autor' required {...register("autor")} />
        </p>
        <p className="alinhar">
          <label htmlFor="editora">Editora:</label>
          <input type="text" name='editora' id='editora' required {...register("editora")} />
        </p>
        <p className="alinhar">
          <label htmlFor="lancamento">Ano de Lançamento:</label>
          <input type="text" name='lancamento' id='lancamento' required {...register("lancamento")} />
        </p>
        <p className="alinhar">
          <label htmlFor="preco">Preço:</label>
          <input type="text" name='preco' id='preco' required {...register("preco")} />
        </p>
        <p className="alinhar">
          <label htmlFor="sinopse">Sinopse:</label>
          <input type="text" name='sinopse' id='sinopse' required {...register("sinopse")} />
        </p>
        <p className="alinhar">
          <label htmlFor="imagem">URL da Imagem:</label>
          <input type="text" name='imagem' id='imagem' required {...register("imagem")} />
        </p>
        <input className='btn' type="submit" value="Cadastrar" />
        <input className='btn' type="reset" value="Limpar" />

      </form>

    </div>
  )
}
