import { Link } from 'react-router-dom'
import './Home.css'
import heroImg from '../../assets/images/hero.png'

export function Home() {
  return (
    <section id="home">
      <div id="cta">
        <h1 className="title">
          O sabor que você <span>deseja</span>
        </h1>

        <p className="description">
          Ligue Agora!
        </p>

        <div id="cta-buttons">
          <Link to="/menu">
            <button className='btn_default'>Ver cardápio</button>
          </Link>

          <a href="tel:+555555555" id="">
            <button className="btn_default">
              <i className="fa-solid fa-phone"></i>
              (55) 9999-9999
            </button>
          </a>
        </div>

        <div className="social-media-buttons">
          <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
        </div>
      </div>

      <div id="banner">
        <img src={heroImg} alt="Banner" />
      </div>
    </section>
  )
}
