import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the RemoveplusSignPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'removeplusSign',
})
export class RemoveplusSignPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
	transform(value: any,args: any): any {
		let filter = args;
		return filter ? value.replace('+', ''):value;
	}
}
