import "./tutorial.css";
import TutorialsSection from "./TutorialsSection";

export default function Tutoriais() {
  return (
    <section id="tutoriais" className="tutoriais">

      <div className="tutoriais-container">
        <h2 className="tutoriais-title">Tutoriais Passo a Passo</h2>
        <p className="tutoriais-description">
          Guias rápidos e fáceis para você usar a tecnologia com mais
          confiança e segurança.
        </p>
      </div>

      <TutorialsSection />

    </section>
  );
}
