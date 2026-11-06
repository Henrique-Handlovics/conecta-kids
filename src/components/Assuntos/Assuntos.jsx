import { useState } from "react";
import "./assuntos.css";
import CardAssuntos from "./CardAssuntos";
import ModalAssuntos from "./ModalAssuntos";
import { assuntos } from "./assuntosData";

export default function Assuntos() {
  const [selectedAssunto, setSelectedAssunto] = useState(null);

  return (
    <section id="assuntos" className="assuntos-section">

      <div className="assuntos-hero">
        <h2>O que você quer descobrir?</h2>
        <p>Escolha um tema e aprenda a se divertir na internet com segurança.</p>
      </div>

      <div className="grid-cards">
        {assuntos.map((assunto) => (
          <CardAssuntos
            key={assunto.id}
            assunto={assunto}
            onOpen={setSelectedAssunto}
          />
        ))}
      </div>

      <ModalAssuntos
        assunto={selectedAssunto}
        onClose={() => setSelectedAssunto(null)}
      />

    </section>
  );
}
