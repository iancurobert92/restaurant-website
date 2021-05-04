import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findIndex'
})
export class FindIndexPipe implements PipeTransform {

  transform(array: any[] | null, property: any, value: any): number {
    if (!array) return -1;
    return array.findIndex(item => item[property] === value);
  }

}
