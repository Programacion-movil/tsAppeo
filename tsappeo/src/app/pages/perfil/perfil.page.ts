import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { User } from 'src/app/models/user.models';
import { Perfil } from 'src/app/models/perfil.models';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  perfil = {} as Perfil
  user = {} as User;

  constructor( 
    private crud: CrudService,
    private utils: UtilsService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getPefilData()
  }

  getPefilData() {
    let user: User = this.utils.getElementInLocalStorage('userData');
    let path = `user/${user.uid}`;

  
    let sub = this.crud.getSubcollection(path, 'profile').subscribe(
      (res: any) => {
        console.log(res);
        this.perfil = res[0]; // Se llena el objeto perfil para usarlo en el front
        sub.unsubscribe();
      },
      (error) => {
        console.error('Error:', error);
        // Acá se hace algo cuando hay error
      },
      () => {
        // Acá se hace algo cuando se completa
      }
    );
  }

  /*getNombre() {
    let nombre: User = this.utils.getElementInLocalStorage('name');
    console.log(nombre);
  }*/

}
