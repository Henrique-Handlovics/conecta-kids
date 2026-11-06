import "./heroSection.css";
import heroIllustration from "../../assets/hero-illustration.svg";

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">

      <div className="hero-content">

        <span className="hero-badge">
          🚀 Internet Segura para Crianças e Jovens
        </span>

        <h2>Navegue, jogue e aprenda com segurança!</h2>

        <p>
          O Conecta Kids mostra, de um jeito divertido, como usar a
          internet, os jogos e as redes sociais sem cair em armadilhas.
          Aprenda, teste seus conhecimentos e vire um expert digital!
        </p>

        <div className="hero-buttons">
          <a href="#assuntos" className="cta-button">Bora começar!</a>
          <a href="#tutoriais" className="secondary-button">Ver Tutoriais</a>
        </div>

      </div>

      <div className="hero-image">

        <div className="floating-icon icon-game">🎮</div>
        <div className="floating-icon icon-shield">🛡️</div>
        <div className="floating-icon icon-star">⭐</div>

        <img src={heroIllustration} alt="Foguete explorando o mundo digital" />

      </div>

    </section>
  );
}
