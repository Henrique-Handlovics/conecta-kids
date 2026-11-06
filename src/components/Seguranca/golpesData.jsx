import { FaGift, FaUserSecret, FaLink } from "react-icons/fa6";

export const golpes = [
  {
    id: 1,
    icon: <FaGift />,
    title: "Prêmio Falso",
    description: "Skins, moedas ou seguidores grátis? Quase sempre é armadilha para roubar sua conta.",
    color: "#FEF3C7",
    iconColor: "#D97706"
  },
  {
    id: 2,
    icon: <FaUserSecret />,
    title: "Perfil Falso",
    description: "Nem todo mundo é quem diz ser. Cuidado com estranhos que pedem fotos ou segredos.",
    color: "#EDE9FE",
    iconColor: "#7C3AED"
  },
  {
    id: 3,
    icon: <FaLink />,
    title: "Links Suspeitos",
    description: "Não clique em links de desconhecidos, nem de amigos que parecem estar \"hackeados\".",
    color: "#FEE2E2",
    iconColor: "#EF4444"
  }
];
