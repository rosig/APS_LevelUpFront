import { BrowserRouter, Switch, Route } from "react-router-dom";
import Administrador from "./views/Administrador";
import Colaborador from "./views/Colaborador";
import TelaLoginUsuario from "./views/TelaLoginUsuario";
import TelaRecomendacoesDoSistema from "./views/TelaRecomendacoesDoSistema";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TelaLoginUsuario />
        </Route>
        <Route exact path="/administrador">
          <Administrador />
        </Route>
        <Route exact path="/colaborador">
          <Colaborador />
        </Route>
        <Route exact path="/recomendacoes">
          <TelaRecomendacoesDoSistema />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
