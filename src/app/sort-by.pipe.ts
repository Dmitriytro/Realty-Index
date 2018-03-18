import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: any, prop: any): any {
    if (value.length === 0) {
      return value;
    } else if (value[0][prop]) {
      return value.sort((elemA, elemB) => {
        if (elemA[prop] > elemB[prop]) {
          return 1;
        } else if (elemB[prop] > elemA[prop]) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      return value;
    }
  }

}
