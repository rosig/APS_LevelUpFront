import React from "react";
import "./styles.scss";
import Page from "../../components/Page";
import TelaRecomendacoesDoSistemaControle from "../../controllers/TelaRecomendacoesDoSistemaControle"

export default function TelaRecomendacoesDoSistema() {
  return (
    <Page className="colaborador">
      <TelaRecomendacoesDoSistemaControle />
    </Page>
  );
}
