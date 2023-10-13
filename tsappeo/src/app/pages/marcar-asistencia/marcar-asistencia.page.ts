import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Asignatura, Asistencia } from 'src/app/models/asignatura.models';
import { User } from 'src/app/models/user.models';
import { CrudService } from 'src/app/services/crud.service';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-marcar-asistencia',
  templateUrl: './marcar-asistencia.page.html',
  styleUrls: ['./marcar-asistencia.page.scss'],
})
export class MarcarAsistenciaPage implements OnInit {

  user = {} as User;
  asignaturas: Asignatura[] = [];
  asistencia: Asistencia = {
    fecha: "12/10/2012",
    hora: "19:10",
    estaPresente: true,
};
  nombreAsignatura: string = "Arquitectura de software";

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
    this.agregarAsistencia();
    /*const alert = await this.alertController.create({
      header: 'Listo!',
      message: 'Marcaste tu asistencia correctamente, se ha enviado un comprobante a tu correo electrónico',
      buttons: ['OK'],
    });

    await alert.present();*/
  }


  ionViewWillEnter() {
    
  }

  

  agregarAsistencia(){
    let user: User = this.utils.getElementInLocalStorage('userData')
    let path = `user/${user.uid}`;

    let sub = this.crud.getSubcollection(path, 'asignatura').subscribe({
      next: (res: any) => {
        this.utils.setElementInLocalStorage('resAsignatura',res);
        console.log(res);
        this.asignaturas == res as Asignatura[];

        this.asignaturas.forEach(element => {
          if (element.nombre_asig = this.nombreAsignatura) {
            console.log('id_fire: ' + element.id);
            let path = `user/${user.uid}/asignatura/${element.id}`;

            this.crud.updateDocument(path, this.asistencia).then(res =>{
              console.log("Actualizado correctamente")
            }, error => {
              console.log("No pasa nah " + error)

            });


          }
          
        });
        sub.unsubscribe();
      }
    })
  }

  

}


