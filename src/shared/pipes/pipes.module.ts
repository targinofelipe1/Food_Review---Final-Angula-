import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoPipe } from './contato.pipe';



@NgModule({
  declarations: [ContatoPipe],
  imports: [
    CommonModule
  ],
  exports: [ContatoPipe]
})
export class PipesModule { }
