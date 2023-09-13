import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userName: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    localStorage.setItem('userName' , this.userName);
    this.router.navigate(['/marcar-asistencia'])
  }

}
