import type { RouteObject } from "react-router-dom";

import Home from "./pages/home/Home"; // 🔥 sua página completa
import Scheduling from "./pages/home/components/Scheduling";
import Agradecimento from "./pages/Agradecimento";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />, // 🔥 aqui precisa ser a página bonita
  },
  {
    path: "/agendamento",
    element: <Scheduling />,
  },
  {
    path: "/agradecimento",
    element: <Agradecimento />,
  },
];

export default routes;