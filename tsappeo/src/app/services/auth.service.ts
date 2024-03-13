import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private ngFireAuth: AngularFireAuth) { }

  // Login usando email y contraseña
  async doLogin(email:string, password:string) {
    return await this.ngFireAuth.signInWithEmailAndPassword(email,password)
  }

  // Logout
  async doLogOut(){
    return await this.ngFireAuth.signOut()
  }

  // Obtener la información del usuario
  async getProfile(){
    return await this.ngFireAuth.currentUser
    
  }

  
}
