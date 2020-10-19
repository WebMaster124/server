import { ErrorHandler, Injectable } from '@angular/core';
@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor() {
    super();
  }

  handleError(error: any) {
    super.handleError(error);
	/*var path_register = window.location.href;
	var BSURL_register = path_register.split("#");
	(<any>window).location = BSURL_register[0]+"#/e"+BSURL_register[1];*/
  }
}