import Usuario from "./Usuario";

class Colaborador extends Usuario {
  constructor(email, nome, cargo, nivel) {
    super(email, nome);
    this.cargo = cargo;
    this.nivel = nivel;
  }
}

export default Colaborador;
