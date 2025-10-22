import { Link } from 'react-router'
import './Titulo.css'

export default function Titulo() {
  return (
    <header>
      <h1>Biblioteca TechStudy</h1>
      <h2>Seu ambiente de estudos da Tecnologia</h2>
      <nav>
        <Link to="/" className='links'>Inicio</Link>&nbsp;&nbsp;
        <Link to="/inclusao" className='links'>Incluir Filme</Link>&nbsp;&nbsp;
        <Link to="/pesquisa" className='links'>Pesquisar</Link>&nbsp;&nbsp;
      </nav>
    </header>
  )
}