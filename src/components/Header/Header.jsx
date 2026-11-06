import "./header.css";
import { FaRocket } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="header">

      <div className="logo">
        <FaRocket />
        <h1 className="header-title">Conecta Kids</h1>
      </div>

      <nav className="header-nav">
        <a className="nav-link" href="#hero">Início</a>
        <a className="nav-link" href="#assuntos">Assuntos</a>
        <a className="nav-link" href="#videos">Vídeos</a>
        <a className="nav-link" href="#tutoriais">Tutoriais</a>
        <a className="nav-link" href="#seguranca">Segurança</a>
        <a className="nav-link" href="#quiz">Quiz</a>
      </nav>

    </header>
  );
}
