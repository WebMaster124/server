import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
/**
 * Generated class for the DateTimeFormatFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'dateTimeFormatFilter',
})
export class DateTimeFormatFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
	transform(date: any, format: string): any {
        var datePipe = new DatePipe("en-US");
        date = datePipe.transform(date, format);
        return date;
    }
}
