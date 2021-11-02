import React from "react";
import "./styles.scss";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  function goToPage(pageName) {
    history.push(`/${pageName}`);
  }

  function signIn() {
    // const
    // userType ? goToPage("administrador") : goToPage("colaborador");
    console.log("logou");
  }

  function handleSubmit(event) {
    event.preventDefault();
    signIn();
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="form" onSubmit={(event) => handleSubmit(event)}>
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
