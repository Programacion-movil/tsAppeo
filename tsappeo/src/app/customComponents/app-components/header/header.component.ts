import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil.models';
import { User } from 'src/app/models/user.models';
import { CrudService } from 'src/app/services/crud.service';
import { UtilsService } from 'src/app/services/utils.service';

import { PerfilPage } from 'src/app/pages/perfil/perfil.page';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  perfil = {} as Perfil
  user = {} as User;

  //userName: string = this.utils.getElementInLocalStorage('userData').userName
  

  constructor(
    private crud: CrudService,
    private utils: UtilsService
  ) { }

  ngOnInit() {
    this.user = this.utils.getElementInLocalStorage('userData');
  }

  ionViewWillEnter() {
    this.getPefilData()
  }
  
  getPefilData() {
    let path = `user/${this.user.uid}`;

    let sub = this.crud.getSubcollection(path, 'profile').subscribe(
      (res: any) => {
        console.log(res);
        this.perfil = res[0]; // Se llena el objeto perfil para usarlo en el front
        sub.unsubscribe();
      },
      (error) => {
        console.error('Error:', error);
        // Acá se hace algo cuando hay error
      }
    );
  }
}
