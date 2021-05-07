import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findIndex'
})
export class FindIndexPipe implements PipeTransform {

  transform(value: any[] | null, property: any, propValue: any): number {
    if (!value) return -1;
    return value.findIndex(item => item[property] === propValue);
  }

}
