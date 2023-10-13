import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Asignatura, Asistencia } from 'src/app/models/asignatura.models';
import { User } from 'src/app/models/user.models';
import { CrudService } from 'src/app/services/crud.service';
import { UtilsService } from 'src/app/services/utils.service';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-marcar-asistencia',
  templateUrl: './marcar-asistencia.page.html',
  styleUrls: ['./marcar-asistencia.page.scss'],
})
export class MarcarAsistenciaPage implements OnInit {

  user = {} as User;
  asignaturas: Asignatura[] = [];

  nuevaAsistencia: Asistencia = {
    fecha: "14/10/2012",
    hora: "19:10",
    estaPresente: true,
  };

  nombreAsignatura: string = "Arquitectura de Software";

  constructor(
    private utils: UtilsService,
    private crud: CrudService,
    private alertController: AlertController) { }

  ngOnInit() {
    this.user = this.utils.getElementInLocalStorage('userData'); // Se obtienen los datos del usuario conectado
  }

  registroExitoso() {
    this.agregarAsistencia();
  }

  agregarAsistencia(){
    let path = `user/${this.user.uid}`;
    this.utils.presentLoading();
    let sub = this.crud.getSubcollection(path, 'asignatura').subscribe({

      next: (res: any) => {

        this.asignaturas = res as Asignatura[];
        this.asignaturas.forEach(asignatura => {

          if (asignatura.nombre_asig == this.nombreAsignatura) { // Se encuentra la asignatura

            let asistencias = Array.from(asignatura.asistencia) as Asistencia[]; // Se guardan todas las asitencias en un array

            asistencias.forEach(asistencia => {

              if (asistencia.fecha == this.nuevaAsistencia.fecha) { // Se valida que la fecha sea distinta

                this.toast('Ya hay una asistencia marcada para este día', 'warning', 1000);

              } else {

                asistencias.push(this.nuevaAsistencia); // Se agrega la nueva asistencia al array

                let pathAsignatura = `user/${this.user.uid}/asignatura/${asignatura.id}`;

                this.crud.updateDocument(pathAsignatura, { asistencia: asistencias }).then(resultado =>{ // Se inserta el array de asistencia en Firebase
                this.toast('Asitencia actualizada correctamente','success', 1000);
                this.utils.dismissLoading();

                }, error => {

                  this.toast(error, 'warning', 1000);
                  this.utils.dismissLoading();

                });
              }
            });
          }
        });

      sub.unsubscribe();
      }
    });
  }

  toast(message: any, color: string, duration: number){
    this.utils.presentToast({
      message: message.toString(),
      color: color,
      icon: 'alert-circle-outline',
      duration: duration
    });

  }




}



