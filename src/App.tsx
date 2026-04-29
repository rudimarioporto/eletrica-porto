import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const element = useRoutes(routes);

  if (!element) {
    return <div>Carregando...</div>;
  }

  return element;
}

export default App;