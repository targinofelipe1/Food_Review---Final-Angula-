import {Component, OnInit} from '@angular/core';
import {Produto} from '../../../shared/model/produto';
import {ProdutoService} from '../../../shared/servico/produto.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-listagem',
    templateUrl: './listagem.component.html',
    styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
    produtos: Produto[];

    constructor(private produtoService: ProdutoService) {
        this.produtos = new Array<Produto>();
    }

    ngOnInit(): void {
        this.listar();
    }

    apagarproduto(produto: Produto) {
        this.produtoService.apagar(produto).subscribe(produto => {
            Swal.fire({
                icon: 'success',
                title: 'Produto deletado com sucesso!',
                showConfirmButton: false,
                timer: 3000
              }); 

              error => {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Erro'
                });
        }});
        this.listar();
    };

    listar() {
        this.produtoService.listar().subscribe(
            (produtoRetornados) => (this.produtos = produtoRetornados)
        );
    };
}

