import { Injectable } from '@angular/core';
import  firebase  from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public ngFireAuth: AngularFireAuth) { }

  // Login usando email y contraseña
  async doLogin(email:string, password:string) {
    return await this.ngFireAuth.signInWithEmailAndPassword(email,password)
  }

  // Logout
  async doLogOut(){
    return await this.ngFireAuth.signOut()
  }

  async getProfile(){
    return await this.ngFireAuth.currentUser
  }
}
