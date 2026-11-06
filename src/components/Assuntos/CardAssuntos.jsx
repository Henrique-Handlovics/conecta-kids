export default function CardAssuntos({ assunto, onOpen }) {
  const { icon, title, description, color, buttonColor, iconColor } = assunto;

  return (
    <div className="topic-card" style={{ backgroundColor: color }}>

      <div className="topic-icon" style={{ color: iconColor }}>
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button
        className="topic-btn"
        style={{ backgroundColor: buttonColor }}
        onClick={() => onOpen(assunto)}
      >
        Saiba mais →
      </button>

    </div>
  );
}
