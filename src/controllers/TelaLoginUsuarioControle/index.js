import React from "react";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import Page from "../../components/Page";

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
    <Page className="login">
      <h1>Login</h1>
      <form className="form" onSubmit={(event) => realizarLogin(event)}>
        {props.children}
      </form>
    </Page>
  );
}
