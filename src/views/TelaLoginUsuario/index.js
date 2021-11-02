import React from "react";
import "./styles.scss";
import TelaLoginUsuarioControle from "../../controllers/TelaLoginUsuarioControle";

export default function TelaLoginUsuario() {
  return (
    <TelaLoginUsuarioControle>
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
    </TelaLoginUsuarioControle>
  );
}
