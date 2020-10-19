import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ReplaceStringPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'replaceString',
})
export class ReplaceStringPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
	transform(value: any,args: any): any {
		let filter = args;
		return filter ? value.replace('Days_', ''):value;
	}
}
