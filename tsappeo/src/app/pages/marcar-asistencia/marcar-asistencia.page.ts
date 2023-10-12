import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Asignatura } from 'src/app/models/asignatura.models';
import { User } from 'src/app/models/user.models';
import { CrudService } from 'src/app/services/crud.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-marcar-asistencia',
  templateUrl: './marcar-asistencia.page.html',
  styleUrls: ['./marcar-asistencia.page.scss'],
})
export class MarcarAsistenciaPage implements OnInit {

  user = {} as User;
  asignaturas: Asignatura[] = [];
  nombreAsignatura: string = "Arquitectura de software"

  constructor(
    private utils: UtilsService,
    private crud: CrudService,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  RedirectToList() {
    this.utils.routerLink('/registro-asistencia');
    
  }

  async registroExitoso() {
    const alert = await this.alertController.create({
      header: 'Listo!',
      message: 'Marcaste tu asistencia correctamente, se ha enviado un comprobante a tu correo electrónico',
      buttons: ['OK'],
    });

    await alert.present();
  }


  ionViewWillEnter() {
    this.getAsignaturasData();
  }

  

  getAsignaturasData(){
    let user: User = this.utils.getElementInLocalStorage('userData')
    let path = `user/${user.uid}`;

    let sub = this.crud.getSubcollection(path, 'asignatura').subscribe({
      next: (res: any) => {
        // console.log(res);
        // Se llena el objeto asignatura para utilizarlo en el front
        this.asignaturas = res as Asignatura[];

        this.asignaturas.forEach(element => {
          if (element.nombre_asig = this.nombreAsignatura) {
            console.log('asignatura: ' + element.nombre_asig);
            console.log('fecha: ' + element.asistencia[0].fecha);
            console.log('está presente: ' + element.asistencia[0].estaPresente);
            console.log('hora: ' + element.asistencia[0].hora);
          
          }
          
        });
        // Hay un problema en la fecha, no puedo capturarlo bien
        sub.unsubscribe();
      }
    })
  }

}
