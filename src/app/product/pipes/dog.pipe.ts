import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dogPipe'
})
export class DogPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
 
    let dogName=value;
    if(dogName.charAt(0)==='p'){
      console.log("TCL: DogPipe -> value", dogName)
     dogName= dogName.toUpperCase();
    }

    return dogName;
  }

}
