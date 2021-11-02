import React from "react";
import "./styles.scss";

export default function TelaRecomendacoesDoSistemaControle() {
  function solicitarListaDeHabilidades() {}
  function solicitarRecomendacoes() {}

  const habilidadesSugesridas = [
		{
			nome: "React",
			descricao: "Lorem ipsum",
			nivel: 0
		},
		{
			nome: "Redux",
			descricao: "Lorem ipsum",
			nivel: 0
		},
		{
			nome: "Express",
			descricao: "Lorem ipsum",
			nivel: 0
		}
  ]
  return (
    <div className="recomendacoes">
      <h1>Recomendações para você</h1>
      {habilidadesSugesridas.map((item) => (
				<div className="recomendacao">
          <div><b>{item.nome}</b></div>
          <div>{item.descricao}</div>
				</div>
      ))}
    </div>
  );
}
