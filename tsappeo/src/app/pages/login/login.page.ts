import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.models';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(
    private auth: AuthService,
    private utils: UtilsService) { }

  ngOnInit() {
  }

  email: string = "";
  password: string = "";

  async login() { //Se debe mejorar este login: Controlar formulario, errores, popup de carga, mensaje de error al fallar autenticación o cosas así

    try {
      const user = await this.auth.doLogin(this.email, this.password);
      if (user) { //La autenticación fue correcta
        let userInfo = await this.auth.getProfile()
          if (userInfo) {
            let userModel : User = {
              uid: userInfo.uid,
              email: userInfo.email!
            }
            this.utils.setElementInLocalStorage("userData", userModel); //Guarda userModel en el localstorage para poder utilizarlo en otras pages
            this.utils.routerLink('/marcar-asistencia');
          }

      } else {
      }
    } catch (error) {
      console.error("Error de autenticación:");
      return
    }

  }

}
