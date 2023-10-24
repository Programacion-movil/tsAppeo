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

  userName: string = "" 
  

  constructor(
    private utils: UtilsService
  ) { }

  ngOnInit() {
    this.userName = this.utils.getElementInLocalStorage('profileData').nombre;
  }




}
