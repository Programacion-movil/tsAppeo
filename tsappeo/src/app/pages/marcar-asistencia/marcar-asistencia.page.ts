import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-marcar-asistencia',
  templateUrl: './marcar-asistencia.page.html',
  styleUrls: ['./marcar-asistencia.page.scss'],
})
export class MarcarAsistenciaPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  RedirectToList() {
    this.router.navigate(['/registro-asistencia'])
  }

  async registroExitoso() {
    const alert = await this.alertController.create({
      header: 'Listo!',
      message: 'Marcaste tu asistencia correctamente, se ha enviado un comprobante a tu correo electrónico',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
