import { RouteObject } from "react-router-dom";

// páginas
import Home from "./pages/home/Home";
import Scheduling from "./pages/home/components/Scheduling";
import Agradecimento from "./pages/Agradecimento";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />, // 🔥 página inicial
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