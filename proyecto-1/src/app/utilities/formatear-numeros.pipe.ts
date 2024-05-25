import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatearNumeros'
})
export class FormatearNumerosPipe implements PipeTransform {

  transform(value: number ) {
    return "$"+new Intl.NumberFormat().format(value)+" pesos";
  }

}
