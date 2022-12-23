import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  urlProdutos = 'http://localhost:8082/produto';

  constructor(private clienteHttp: HttpClient) {}

  listar(): Observable<Produto[]> {
    return this.clienteHttp.get<Produto[]>(this.urlProdutos);
  }

  inserir(novoProduto: Produto): Observable<Produto> {
    return this.clienteHttp.post<Produto>(this.urlProdutos, novoProduto);
  }

  apagar(id: Produto | undefined): Observable<object> {
    return this.clienteHttp.delete(this.urlProdutos, {body:id});
  }

  pesquisarproduto(id: number): Observable<Produto> {
    return this.clienteHttp.get<Produto>(`${this.urlProdutos}/${id}`);
  }

  editarProduto(id: number,produto:Produto){
    return this.clienteHttp.put<Produto>(`${this.urlProdutos}/${id}`,produto)
  }
}
