import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastrieTagColor'
})
export class PastrieTagColorPipe implements PipeTransform {

 /* transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/
  transform(tag : string) : string {
    let color : string;
    switch(tag) {
      case 'sucré' :
        color ="bg-red";
        break;
      case 'yummy' :
        color ="bg-blue";
        break;
      case 'chocolat' :
        color ="bg-green";
        break;
      case 'poires' :
        color ="bg-brown";
        break;
      case 'fruits' :
        color ="bg-deeppink";
        break;
      case 'bananes' :
        color ="bg-deep-orange";
        break;
      case 'framboises' :
        color ="bg-chartreuse";
        break;
      case 'dessert' :
        color ="bg-blueviolet";
        break;
      default:
        color = 'grey';
        break;
    }

    return `${color}`
  }

}
