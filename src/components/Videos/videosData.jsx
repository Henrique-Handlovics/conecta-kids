import {
  FaGamepad,
  FaUserShield,
  FaLock,
  FaHeart,
  FaTriangleExclamation,
  FaRobot
} from "react-icons/fa6";

// ATENÇÃO: duração e links são provisórios.
// Troque pelos vídeos reais que você for usar no site.
export const videos = [
  {
    id: 1,
    icon: <FaGamepad />,
    title: "Jogando online com segurança",
    description: "Divirta-se com os amigos sem cair em armadilhas no chat do jogo.",
    duration: "5 minutos",
    level: "Fácil",
    color: "#CCFBF1",
    iconColor: "#0D9488",
    topics: ["Quem pode falar com você", "Presentes e skins falsas", "Compras dentro do jogo", "Como denunciar jogadores"],
    text: `
Jogar online é uma das melhores formas de se divertir com a galera.

Neste vídeo você vai aprender:

• Como proteger sua conta de jogo.

• Por que não aceitar presentes de estranhos.

• Como bloquear e denunciar quem te incomoda.

• Quando pedir ajuda a um adulto.

Lembre-se:
Nunca passe sua senha, nem para quem diz ser "da equipe do jogo".
`,
    url: "https://internetsegura.br"
  },
  {
    id: 2,
    icon: <FaUserShield />,
    title: "Quem é quem na internet?",
    description: "Descubra como reconhecer perfis falsos e pessoas mal-intencionadas.",
    duration: "4 minutos",
    level: "Fácil",
    color: "#EDE9FE",
    iconColor: "#7C3AED",
    topics: ["Perfis falsos", "Pedidos estranhos", "O que nunca contar", "Quando bloquear"],
    text: `
Na internet, qualquer pessoa pode fingir ser outra.

Você vai aprender:

• Sinais de que um perfil pode ser falso.

• Por que não passar endereço, escola ou fotos.

• Como bloquear e denunciar.

• Por que contar para um adulto de confiança.
`,
    url: "https://internetsegura.br"
  },
  {
    id: 3,
    icon: <FaLock />,
    title: "Senhas de super-herói",
    description: "Crie senhas fortes e proteja suas contas dos vilões digitais.",
    duration: "5 minutos",
    level: "Fácil",
    color: "#FCE7F3",
    iconColor: "#DB2777",
    topics: ["Criar senhas fortes", "O que evitar", "Guardar com segurança", "Verificação em duas etapas"],
    text: `
Uma boa senha é o escudo da sua conta.

Você vai aprender:

• Como criar uma senha forte e fácil de lembrar.

• O que nunca usar (nome, aniversário, 123456).

• Por que cada conta precisa de uma senha diferente.

• Como ativar a verificação em duas etapas.
`,
    url: "https://internetsegura.br"
  },
  {
    id: 4,
    icon: <FaHeart />,
    title: "Cyberbullying: como agir",
    description: "Saiba o que fazer se você ou um colega sofrer ofensas online.",
    duration: "6 minutos",
    level: "Médio",
    color: "#FEE2E2",
    iconColor: "#EF4444",
    topics: ["O que é cyberbullying", "Como ajudar um colega", "Guardar provas (prints)", "A quem pedir ajuda"],
    text: `
Ofensas e humilhações online machucam de verdade.

Neste conteúdo você vai aprender:

• Como identificar o cyberbullying.

• Como bloquear, denunciar e guardar provas.

• Como apoiar um colega sem entrar na brincadeira.

• Por que conversar com um adulto de confiança ajuda.
`,
    url: "https://new.safernet.org.br"
  },
  {
    id: 5,
    icon: <FaTriangleExclamation />,
    title: "Golpes e pegadinhas online",
    description: "Skin grátis, prêmios e links suspeitos: aprenda a não cair.",
    duration: "6 minutos",
    level: "Médio",
    color: "#FEF3C7",
    iconColor: "#D97706",
    topics: ["Prêmios falsos", "Links suspeitos", "Conta hackeada", "O que fazer se cair"],
    text: `
Golpistas sabem o que você gosta e usam isso contra você.

Você vai aprender:

• Como identificar ofertas falsas.

• Por que não clicar em links desconhecidos.

• O que fazer se sua conta for invadida.

• Como pedir ajuda rápido.
`,
    url: "https://internetsegura.br"
  },
  {
    id: 6,
    icon: <FaRobot />,
    title: "IA, fake news e deepfakes",
    description: "Aprenda a checar se uma imagem, vídeo ou notícia é de verdade.",
    duration: "7 minutos",
    level: "Médio",
    color: "#DBEAFE",
    iconColor: "#2563EB",
    topics: ["O que é inteligência artificial", "Imagens e vozes falsas", "Checar fontes", "Não repassar na dúvida"],
    text: `
Hoje a inteligência artificial cria imagens, vozes e vídeos muito realistas.

Neste conteúdo você vai aprender:

• Como desconfiar de conteúdos "perfeitos demais".

• Como conferir a fonte de uma notícia.

• Onde pesquisar para confirmar uma informação.

• Por que não repassar na dúvida.
`,
    url: "https://internetsegura.br"
  }
];
