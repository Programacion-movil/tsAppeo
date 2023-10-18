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

  user = {} as User;

  userName: string = this.utils.getElementInLocalStorage('userData').email
  

  constructor(
    private crud: CrudService,
    private utils: UtilsService
  ) { }

  ngOnInit() {
    this.user = this.utils.getElementInLocalStorage('userData');
  }



}
