import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the RemoveUnderscorePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'removeUnderscore',
})
export class RemoveUnderscorePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any,args: any): any {
    let filter = args;
    return filter ? value.replace('_', ' '):value;
  }
}
