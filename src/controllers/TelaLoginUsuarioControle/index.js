import React from "react";
import "./styles.scss";
import { useHistory } from "react-router-dom";

export default function TelaLoginUsuarioControle(props) {
  const history = useHistory();

  function goToPage(pageName) {
    history.push(`/${pageName}`);
  }

  async function realizarLogin(event) {
    event.preventDefault();

    try {
      const user = { type: "colaborador" };
      user.type === "administrador"
        ? goToPage("administrador")
        : goToPage("colaborador");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="form" onSubmit={(event) => realizarLogin(event)}>
      <input
        className="form__email"
        type="email"
        required
        placeholder="Email"
      />
      <input
        className="form__password"
        type="password"
        required
        placeholder="Senha"
      />
      <input className="form__submit" type="submit" value="Entrar" />
      </form>
    </div>
  );
}
