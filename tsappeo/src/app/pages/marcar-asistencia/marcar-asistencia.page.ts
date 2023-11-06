import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Asignatura, Asistencia } from 'src/app/models/asignatura.models';
import { User } from 'src/app/models/user.models';
import { CrudService } from 'src/app/services/crud.service';
import { UtilsService } from 'src/app/services/utils.service';
import { GeolocationService } from 'src/app/services/geolocation.service';

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
  asignatura = {} as Asignatura | null;

  nuevaAsistencia: Asistencia = {
    fecha: "18/10/2023",
    hora: "19:10",
    estaPresente: true,
  };

  nombreAsignatura: string = "Arquitectura de Software";

  constructor(
    private utils: UtilsService,
    private crud: CrudService,
    private geolocationService: GeolocationService
  ) { }

  ngOnInit() {
    this.user = this.utils.getElementInLocalStorage('userData'); // Se obtienen los datos del usuario conectado
    this.getLocation();
  }

  agregarAsistencia(){
    let path = `user/${this.user.uid}`;
    this.utils.presentLoading();
    let sub = this.crud.getSubcollection(path, 'asignatura').subscribe({

      next: (res: any) => {

        this.asignaturas = res as Asignatura[];
        this.asignatura = this.encontrarAsignatura(this.asignaturas, this.nombreAsignatura) // Busca la asignatura

          if (this.asignatura != null) { // Evalúa el resultado

              let asistencias = Array.from(this.asignatura.asistencia) as Asistencia[]; // Se guardan todas las asitencias en un array
  
              if (this.validarFecha(asistencias, this.nuevaAsistencia.fecha)) {
  
                this.toast('Ya hay una asistencia marcada para este día', 'warning', 1000);
                this.utils.dismissLoading();
  
              } else {
  
                asistencias.push(this.nuevaAsistencia); // Se agrega la nueva asistencia al array
  
                let pathAsignatura = `user/${this.user.uid}/asignatura/${this.asignatura.id}`;
  
                this.crud.updateDocument(pathAsignatura, { asistencia: asistencias }).then(resultado =>{ // Se inserta el array de asistencia en Firebase
                this.toast('Asitencia ingresada correctamente','success', 1000);
                this.utils.dismissLoading();
  
                }, error => {
  
                  this.toast(error, 'warning', 1000);
                  this.utils.dismissLoading();
  
                });
              }
          } else {
            this.toast('No se ha encontrado la asignatura', 'warning', 1000);
            this.utils.dismissLoading();
          }
      sub.unsubscribe();
      }
    });
  }

  // Método para levantar un mensaje
  toast(message: any, color: string, duration: number){
    this.utils.presentToast({
      message: message.toString(),
      color: color,
      icon: 'alert-circle-outline',
      duration: duration
    });

  }

  // Recorre el listado de asignaturas del usuario y lo evalúa contra la asignatura que se desea marcar asistencia
  encontrarAsignatura(asignaturas: Asignatura[], asignaturaObj: string): Asignatura | null {
    for (const asignatura of asignaturas) {
      if (asignatura.nombre_asig === asignaturaObj) {
        return asignatura;
      }
    }
    return null;
  }

  // Recorre el lista de asistencias y evalúa las fechas para no registrar dos veces una asistencia
  validarFecha(asistencias: Asistencia[], fechaNuevaAsis: string): boolean {
    for (const asistencia of asistencias) {
      if (asistencia.fecha === fechaNuevaAsis) {
        return true;
      }
    }
    return false;
  }

  getLocation() {
    this.geolocationService.getCurrentLocation().then((resp: any) => {
      console.log('Latitude: ' + resp.coords.latitude);
      console.log('Longitude: ' + resp.coords.longitude);
    }).catch((error) => {
      console.error('Error getting location', error);
    });
  }



}



