import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.models';
import { Asignatura } from 'src/app/models/asignatura.models';
import { CrudService } from 'src/app/services/crud.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.page.html',
  styleUrls: ['./registro-asistencia.page.scss'],
})
export class RegistroAsistenciaPage implements OnInit {

  user = {} as User;
  asignaturas: Asignatura[] = []

  constructor( 
    private crud: CrudService,
    private utils: UtilsService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAsignaturaData()
  }

  getAsignaturaData(){
    let user: User = this.utils.getElementInLocalStorage('userData')
    let path = `user/${user.uid}`;

    let sub = this.crud.getSubcollection(path, 'asignatura').subscribe({
      next: (res: any) => {
        console.log(res);
        // Se llena el objeto asignatura para utilizarlo en el front
        this.asignaturas = res as Asignatura[];
        // Hay un problema en la fecha, no puedo capturarlo bien
        console.log("este es el objeto asignaturas" + this.asignaturas[0].nombre_asig + this.asignaturas[0].seccion + this.asignaturas[0].asistencia[0].fecha + this.asignaturas[0].asistencia[0].estaPresente);
        sub.unsubscribe();
      }
    })
  }

}
