import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DiscountPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value, args) {
    let tmp = args;
    return (tmp>0) ? (value - (value * tmp) / 100) : value;
  }
}
