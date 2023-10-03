import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/firebaseAuthService/auth-service.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(
    private router: Router,
    public fireAuthService: AuthServiceService) { }

  ngOnInit() {
  }

  email: string = "";
  password: string = "";

  async login() {

    try {
      const user = await this.fireAuthService.doLogin(this.email, this.password);
      if (user) { //La autenticación fue correcta
        const userInfo = await this.fireAuthService.getProfile()
        localStorage.setItem("userInfo", JSON.stringify(userInfo)); //Se guarda la información del usuario en localstorage
        this.router.navigate(['/registro-asistencia']);
      } else {
        
      }
    } catch (error) {
      console.error("Error de autenticación:");
      return
    }

    //localStorage.setItem('Email' , this.email);
    //this.router.navigate(['/marcar-asistencia'])
  }

}
