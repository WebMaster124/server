import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp,IonicModule} from 'ionic-angular'; /*IonicErrorHandler*/
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InfoService } from './../services/info';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { MyApp } from './app.component';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import { GlobalErrorHandler } from './ErrorHandler';
import { ComponentsModule } from '../components/components.module';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { PhotoProvider } from '../providers/photo/photo';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { HTTP } from '@ionic-native/http';
import { AppVersion } from '@ionic-native/app-version';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
//import { UniqueDeviceID } from '@ionic-native/unique-device-id';
//import { Market } from '@ionic-native/market';
import { Keyboard } from '@ionic-native/keyboard';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({

  declarations: [
      MyApp
  ],
  imports: [
    BrowserModule,
	ComponentsModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	InternationalPhoneModule,
    IonicModule.forRoot(MyApp,{
        iconMode: 'md',
		modalEnter: 'modal-slide-in',
		modalLeave: 'modal-slide-out',
		pageTransition: 'ios-transition',
locationStrategy: 'path'
    }),
	Ng4GeoautocompleteModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
	MyApp
	],
  providers: [
    StatusBar,
    SplashScreen,
	Camera,
	File,
	InfoService,
	HTTP,
	PhotoProvider,
	AppVersion,
	InAppBrowser,
	GoogleAnalytics,
	Keyboard,
        PayPal,
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ]
})

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  this.pdfSrc = 'http://192.168.1.183/';
 this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
} 




export class AppModule {}

