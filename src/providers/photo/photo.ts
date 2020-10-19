import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';

/*
  Generated class for the PhotoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class PhotoProvider {
	
	public cameraImage : String;
	 
	constructor(public file: File,private _CAMERA : Camera) {
		
	}
	
	selectImage() : Promise<any>{
		return new Promise(resolve =>{
			let cameraOptions : CameraOptions = {
				sourceType: this._CAMERA.PictureSourceType.PHOTOLIBRARY,
				destinationType: this._CAMERA.DestinationType.DATA_URL,
				quality: 100,
				targetWidth: 1024,
				targetHeight: 1024,
				encodingType: this._CAMERA.EncodingType.JPEG,
				correctOrientation : true,
				allowEdit : true
			};
			this._CAMERA.getPicture(cameraOptions).then((data) =>{
				resolve('data:image/jpeg;base64,'+ data);
			});
		});
	}
}
