import { Produto } from './../../../shared/model/produto';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
import { ProdutoService } from '../../../shared/servico/produto.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent implements OnInit {
  produto: Produto;
  inserindo = true;
  constructor(private produtoService: ProdutoService, private router: Router,private rotaAtual: ActivatedRoute) {
    this.produto = new Produto();
    if (this.rotaAtual.snapshot.paramMap.has('id')) {
      this.inserindo = false;
      const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
      this.produtoService.pesquisarproduto(Number(idParaEdicao)).subscribe((produtoRetornado) => {
        this.produto = produtoRetornado;
        
        console.log(this.produto);
      });
    }
  }

  ngOnInit(): void {}

  inserirProduto()  {
    if (this.inserindo) {
      this.produtoService.inserir(this.produto).subscribe(produto => {
        Swal.fire({
          icon: 'success',
          title: 'Produto cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 3000
        });
        setTimeout(() => {
          this.router.navigate(['']);
        }, 3000);
        this.produto = new Produto();

        error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Erro'
          });
      }});

        this.produto = new Produto();
        return
      }
      this.produtoService.editarProduto(this.produto.id||0, this.produto).subscribe(produto => {
        Swal.fire({
          icon: 'success',
          title: 'Produto editado com sucesso!',
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
      this.router.navigate(['']);


    
  }

  inicio(): void {
    console.log('Digitando');
  }
}
