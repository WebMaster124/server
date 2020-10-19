import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ReplaceUnderscorePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'replaceUnderscore',
})
export class ReplaceUnderscorePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any,args: any): any {
    let filter = args;
    return filter ? value.replace(/\s/g, '_'):value;
  }
}
