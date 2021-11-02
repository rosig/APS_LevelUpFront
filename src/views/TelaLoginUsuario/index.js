import React from "react";
import "./styles.scss";
import TelaLoginUsuarioControle from "../../controllers/TelaLoginUsuarioControle";
import Page from "../../components/Page";

export default function TelaLoginUsuario() {
  return (
    <Page>
      <TelaLoginUsuarioControle />
    </Page>
  );
}
