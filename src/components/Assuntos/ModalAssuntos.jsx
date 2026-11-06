export default function ModalAssuntos({ assunto, onClose }) {
  if (!assunto) return null;

  return (
    <div className="topic-overlay" onClick={onClose}>

      <div className="topic-modal" onClick={(e) => e.stopPropagation()}>

        <button className="topic-close" onClick={onClose} aria-label="Fechar">
          ✕
        </button>

        <div className="topic-modal-icon" style={{ color: assunto.modalAccent }}>
          {assunto.icon}
        </div>

        <h2>{assunto.title}</h2>

        <p className="topic-text">{assunto.content}</p>

        <button
          className="topic-confirm"
          style={{ backgroundColor: assunto.modalAccent }}
          onClick={onClose}
        >
          Entendi!
        </button>

      </div>

    </div>
  );
}
