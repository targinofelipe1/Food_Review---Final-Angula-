import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contato'
})
export class ContatoPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length === 11) {
      return `${value.substring(0, 2)} ${value.substring(2, 7)}-${value.substring(7, 11)};`
    }
    return value; 
  }

}
