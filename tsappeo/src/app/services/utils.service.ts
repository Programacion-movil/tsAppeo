import { Injectable } from '@angular/core';
import { AlertController, AlertOptions, LoadingController, LoadingOptions, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';
import { Router } from '@angular/router';



import { Geolocation } from '@capacitor/geolocation';





@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  position: any;
  constructor(
    private loadingController: LoadingController,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController,
  ) { }

  // Loading

  async presentLoading(opts?: LoadingOptions) {
    const loading = await this.loadingController.create(opts);
    await loading.present();
  }

  async dismissLoading() {
    return await this.loadingController.dismiss();
  }

  // LocalStorage
  setElementInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  getElementInLocalStorage(key: string) {
    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : null;
  }

  removeElementInLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  async presentToast(opts: ToastOptions) {
    const toast = await this.toastController.create(opts);
    toast.present();
  }

  // Router
  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }

  // Alert
  async presentAlert(opts: AlertOptions) {
    const alert = await this.alertController.create(opts);
    await alert.present();
  }

  // Modal Present
  async presentModal(opts: ModalOptions) {
    const modal = await this.modalController.create(opts);
    await modal.present();

    const {data} = await modal.onWillDismiss();
    
    if(data){
      return data;
    }
  }

  // Dismiss
  dismssModal(data?: any) {
    this.modalController.dismiss(data);
  }

  //Geolocalizacion
 async obtenerUbicacion(): Promise<any> {
  try {
    const coordenadas=await Geolocation.getCurrentPosition();
    return {latitud: coordenadas.coords.latitude,
            longitud: coordenadas.coords.longitude};
    
  } catch (e) {
    console.error("vvvvv", e);
    return null;
    
  }

 }




}
