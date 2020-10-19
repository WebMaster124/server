import { NgModule } from '@angular/core';
import { ReplaceStringPipe } from './replace-string/replace-string';
import { ReplaceUnderscorePipe } from './replace-underscore/replace-underscore';
import { RemoveUnderscorePipe } from './remove-underscore/remove-underscore';
import { DiscountPipe } from './discount/discount';
import { RemoveplusSignPipe } from './removeplus-sign/removeplus-sign';
import { ReplaceNamePipe } from './replace-name/replace-name';
import { DateTimeFormatFilterPipe } from './date-time-format-filter/date-time-format-filter';
@NgModule({
	declarations: [ReplaceStringPipe,
    ReplaceUnderscorePipe,
    RemoveUnderscorePipe,
    DiscountPipe,
    RemoveplusSignPipe,
    ReplaceNamePipe,
    DateTimeFormatFilterPipe],
	imports: [],
	exports: [ReplaceStringPipe,
    ReplaceUnderscorePipe,
    RemoveUnderscorePipe,
    DiscountPipe,
    RemoveplusSignPipe,
    ReplaceNamePipe,
    DateTimeFormatFilterPipe]
})
export class PipesModule {}
