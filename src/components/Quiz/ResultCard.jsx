export default function ResultCard({ score, total, onRestart }) {
  const percentage = (score / total) * 100;

  let title = "";
  let message = "";
  let emoji = "";
  let color = "";

  if (percentage === 100) {
    title = "Mestre da Segurança!";
    message = "Gabaritou! Você sabe tudo sobre se proteger na internet. Que tal ensinar o que aprendeu para os amigos e a família?";
    emoji = "🏆";
    color = "#16A34A";
  } else if (percentage >= 70) {
    title = "Mandou bem!";
    message = "Você está quase lá! Revise os conteúdos do site e logo logo chega ao nível máximo.";
    emoji = "🚀";
    color = "#7C3AED";
  } else if (percentage >= 40) {
    title = "Quase lá!";
    message = "Você já sabe bastante, mas ainda dá para melhorar. Dê uma olhada nos tutoriais e tente de novo.";
    emoji = "📚";
    color = "#D97706";
  } else {
    title = "Bora tentar de novo!";
    message = "Sem problemas, todo mundo começa de algum lugar. Veja os conteúdos do site e jogue outra vez!";
    emoji = "💪";
    color = "#EC4899";
  }

  return (
    <div className="result-card">

      <div className="result-emoji" style={{ backgroundColor: color }}>
        {emoji}
      </div>

      <h2>{title}</h2>

      <h3>
        Você acertou
        <span style={{ color }}> {score} de {total}</span>
      </h3>

      <p>{message}</p>

      <div className="result-stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>
            {index < Math.round((score / total) * 5) ? "⭐" : "☆"}
          </span>
        ))}
      </div>

      <button className="restart-btn" onClick={onRestart}>
        🔄 Jogar de novo
      </button>

    </div>
  );
}
