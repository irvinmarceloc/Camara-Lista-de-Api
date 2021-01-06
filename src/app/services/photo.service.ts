import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor() { }
  public photos: Photo[] = [];
  //Función para tomar una foto 
  public async addNewToGallery() {
    // Hacer una foto
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, source: CameraSource.Camera, quality: 100,
    });

    this.photos.unshift({
      filepath: "pronto...",  webviewPath: capturedPhoto .webPath
    });
  }
}
interface Photo {
  filepath: string;
  webviewPath: string;
  base64?: string;
}
