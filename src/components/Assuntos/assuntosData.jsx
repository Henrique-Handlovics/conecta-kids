import {
  FaWhatsapp,
  FaLock,
  FaGlobe,
  FaGamepad,
  FaTriangleExclamation,
  FaNewspaper
} from "react-icons/fa6";

export const assuntos = [
  {
    id: 1,
    icon: <FaWhatsapp />,
    title: "Redes e Chats",
    description: "Converse numa boa, sem cair em furada.",
    color: "#FCE7F3",
    buttonColor: "#DB2777",
    iconColor: "#DB2777",
    modalAccent: "#DB2777",
    content: `
Zap, Instagram, TikTok, Discord... é onde a galera se encontra. Só que nem todo mundo ali é quem diz ser.

💬 Só aceite quem você conhece de verdade;

📵 Nunca passe código que chegou por SMS, nem pra amigo;

🔒 Deixe seu perfil privado;

🚫 Não mande foto íntima, mesmo pra quem você confia;

🗣️ Se alguém te deixar desconfortável, bloqueie e conte pra um adulto de confiança.
`
  },
  {
    id: 2,
    icon: <FaLock />,
    title: "Senhas Fortes",
    description: "Proteja suas contas como um verdadeiro pro.",
    color: "#EDE9FE",
    buttonColor: "#7C3AED",
    iconColor: "#7C3AED",
    modalAccent: "#7C3AED",
    content: `
Sua conta vale muito: perfil, skins, progresso, fotos. Não deixe ninguém roubar.

🔑 Misture letras, números e símbolos;

🎂 Evite data de aniversário e nome do pet;

🤐 Senha não se empresta, nem pro melhor amigo;

🛡️ Ative a verificação em duas etapas;

♻️ Use uma senha diferente para cada conta.
`
  },
  {
    id: 3,
    icon: <FaTriangleExclamation />,
    title: "Golpes Online",
    description: "Skin grátis? Prêmio? Desconfie!",
    color: "#FEE2E2",
    buttonColor: "#EF4444",
    iconColor: "#EF4444",
    modalAccent: "#EF4444",
    content: `
Golpista adora prometer o que todo mundo quer: skin grátis, seguidores, dinheiro fácil.

🎁 Se é bom demais pra ser verdade, é golpe;

🔗 Não clique em link de desconhecido;

🧑‍💻 Ninguém sério pede sua senha ou código;

⏰ Pressa e "oferta só hoje" são sinais de alerta;

🙋 Caiu ou ficou na dúvida? Fale com seus pais ou responsáveis.
`
  },
  {
    id: 4,
    icon: <FaGlobe />,
    title: "Privacidade na Internet",
    description: "O que você posta fica. Pense antes!",
    color: "#DBEAFE",
    buttonColor: "#2563EB",
    iconColor: "#2563EB",
    modalAccent: "#2563EB",
    content: `
Tudo que vai pra internet pode ser copiado, printado e compartilhado.

📍 Não poste onde você mora ou estuda;

📸 Pense antes de postar foto sua ou de outras pessoas;

🌐 Confira se o site começa com https://;

🍪 Cuidado com apps que pedem permissões demais;

🧹 Revise de tempos em tempos o que está público no seu perfil.
`
  },
  {
    id: 5,
    icon: <FaGamepad />,
    title: "Jogos Online",
    description: "Jogue, divirta-se e fique protegido.",
    color: "#CCFBF1",
    buttonColor: "#0D9488",
    iconColor: "#0D9488",
    modalAccent: "#0D9488",
    content: `
Jogar com amigos é ótimo, mas o chat do jogo também tem gente mal-intencionada.

🎮 Não passe dados pessoais no chat do jogo;

👤 Cuidado com estranhos que oferecem ajuda ou presentes;

💳 Nunca use o cartão dos seus pais sem avisar;

🧾 Compras dentro do jogo precisam de autorização;

🚨 Viu ou sofreu ofensa e ameaça? Denuncie e conte para um adulto.
`
  },
  {
    id: 6,
    icon: <FaNewspaper />,
    title: "Fake News e IA",
    description: "Nem tudo que viraliza é verdade.",
    color: "#FEF3C7",
    buttonColor: "#D97706",
    iconColor: "#D97706",
    modalAccent: "#D97706",
    content: `
Vídeo, áudio e foto podem ser criados ou alterados por inteligência artificial. Aprenda a checar antes de acreditar.

🔎 Leia a notícia inteira, não só o título;

📰 Veja quem publicou e se a fonte é confiável;

🧠 Pesquise em outros sites antes de compartilhar;

🤖 Desconfie de imagens e vozes "perfeitas demais";

✋ Na dúvida, não repasse.
`
  }
];
