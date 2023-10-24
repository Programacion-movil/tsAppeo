import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.models';
import { UtilsService } from 'src/app/services/utils.service';
import { CrudService } from 'src/app/services/crud.service';
import { Perfil } from 'src/app/models/perfil.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  perfil = {} as Perfil;
  
  constructor(
    private auth: AuthService,
    private utils: UtilsService,
    private crud: CrudService) { }

  ngOnInit() {
  }

  email: string = "";
  password: string = "";

  async login() { //Se debe mejorar este login: Controlar formulario, errores, popup de carga, mensaje de error al fallar autenticación o cosas así
    this.utils.presentLoading({message: 'Autenticando...' });
    try {
      const user = await this.auth.doLogin(this.email, this.password);
      if (user) { //La autenticación fue correcta
        let userInfo = await this.auth.getProfile()
          if (userInfo) {
            let userModel : User = {
              uid: userInfo.uid,
              email: userInfo.email!
            }
            console.log(userInfo)
            this.getPefilData(userModel.uid);
            this.utils.setElementInLocalStorage("userData", userModel); //Guarda userModel en el localstorage para poder utilizarlo en otras pages
            this.utils.dismissLoading();
            this.email = "";
            this.password = "";
            this.utils.routerLink('/marcar-asistencia');
          } else {
            this.utils.dismissLoading();
            this.toast('No se pudo obtener información de usuario', 'warning', 1000);
          }

      } else {
        this.utils.dismissLoading();
        this.toast('No se pudo realizar conexión', 'warning', 1000);
      }
    } catch (error) {
      this.utils.dismissLoading();
      this.toast('Error de conexión, revise los datos ingresados', 'warning', 1000);
      return
    }

  }

  getPefilData(uid: string) {
    let path = `user/${uid}`;

    let sub = this.crud.getSubcollection(path, 'profile').subscribe(
      (res: any) => {
        console.log(res);
        this.perfil = res[0] as Perfil; // Se llena el objeto perfil para usarlo en el front
        this.utils.setElementInLocalStorage('profileData', this.perfil);
        sub.unsubscribe();
      },
      (error) => {
        console.error('Error:', error);
        // Acá se hace algo cuando hay error
      }
    );
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
