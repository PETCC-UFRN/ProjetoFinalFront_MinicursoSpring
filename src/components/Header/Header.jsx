import { Link } from 'react-router-dom'
import './Header.css'

export function Header() {
  return (
    <header>
      <nav id="navbar">
        <Link to="/" id="logo_container">
          <i className="fa-solid fa-utensils" id="nav_logo"></i>
          <span>Food</span>
        </Link>

        <ul id="nav_list">
          <li className="nav_item">
            <Link to="/">Início</Link>
          </li>
          <li className="nav_item">
            <Link to="/menu">Cardápio</Link>
          </li>
          <li className="nav_item">
            <Link to="/">Login</Link>
          </li>
        </ul>

        <button className="btn_default">
          Peça aqui
        </button>
      </nav>
    </header>
  )
}
