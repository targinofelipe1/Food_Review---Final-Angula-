export class Produto {
  id?: number;
  logo?: string;
  nome?: string;
  localizacao?: string;
  avaliacao?: number;
  contato?: string;

  constructor(id?: number, produto: Produto = {}) {
    this.id = id;
    this.logo = produto.logo;
    this.nome = produto.nome;
    this.localizacao = produto.localizacao;
    this.avaliacao = produto.avaliacao;
    this.contato = produto.contato;
  }


}
