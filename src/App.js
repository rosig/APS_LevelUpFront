import { BrowserRouter, Switch, Route } from "react-router-dom";
import Administrador from "./views/Administrador";
import Colaborador from "./views/Colaborador";
import Login from "./views/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/administrador">
          <Administrador />
        </Route>
        <Route exact path="/colaborador">
          <Colaborador />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
