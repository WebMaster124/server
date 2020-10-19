import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ReplaceNamePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'replaceName',
})
export class ReplaceNamePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any,args: any): any {
		
		let filter = args;
		var getFirstChar = filter.substring(1, 0);
		var getLastChar = filter.substring(filter.length - 1);
		var setName =  getFirstChar+ '***' + getLastChar;
		return filter ? value.replace(filter, setName):value;
	}
}
