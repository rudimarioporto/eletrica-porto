import type { RouteObject } from "react-router-dom";

import Home from "./pages/home/Home";
import Scheduling from "./pages/home/components/Scheduling";
import Agradecimento from "./pages/Agradecimento";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/agendamento",
    element: <Scheduling />,
  },
  {
    path: "/agradecimento",
    element: <Agradecimento />,
  },
  {
    path: "*",
    element: <Home />,
  },
];

export default routes;