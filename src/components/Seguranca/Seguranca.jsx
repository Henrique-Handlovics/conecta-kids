import "./seguranca.css";
import SecurityCard from "./SecurityCard";
import WarningBox from "./WarningBox";
import { golpes } from "./golpesData";

import {
  FaShieldHalved,
  FaLock,
  FaPhone,
  FaArrowRotateRight,
  FaCircleCheck,
  FaUserSecret
} from "react-icons/fa6";

export default function Security() {
  return (
    <section className="seguranca-section" id="seguranca">

      <div className="seguranca-header">
        <span className="seguranca-badge">🛡️ Segurança Digital</span>
        <h2>Fique esperto contra as armadilhas online</h2>
        <p>
          Aprenda a reconhecer as pegadinhas mais comuns e use a
          internet com muito mais segurança.
        </p>
      </div>

      <h3 className="section-title">Armadilhas mais comuns</h3>

      <div className="security-grid">
        {golpes.map((golpe) => (
          <SecurityCard key={golpe.id} {...golpe} />
        ))}
      </div>

      <h3 className="section-title">Como se proteger</h3>

      <div className="tips-grid">
        <div className="tip-card"><FaLock /> Senha é segredo: não compartilhe nem com amigos.</div>
        <div className="tip-card"><FaUserSecret /> Não aceite pedidos de quem você não conhece.</div>
        <div className="tip-card"><FaPhone /> Se algo te deixar desconfortável, conte para um adulto de confiança.</div>
        <div className="tip-card"><FaShieldHalved /> Desconfie de prêmios e ofertas fáceis demais.</div>
        <div className="tip-card"><FaArrowRotateRight /> Mantenha apps e jogos sempre atualizados.</div>
        <div className="tip-card"><FaCircleCheck /> Ative a verificação em duas etapas.</div>
      </div>

      <WarningBox />

    </section>
  );
}
