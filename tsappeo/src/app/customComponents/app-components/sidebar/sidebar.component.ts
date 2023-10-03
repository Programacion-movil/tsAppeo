import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthServiceService } from 'src/app/firebaseAuthService/auth-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent  implements OnInit {

  constructor(private router: Router,
    public authService: AuthServiceService) { }

  ngOnInit() {}

  async doLogOut() {
    await this.authService.doLogOut()
    this.router.navigate(['/login'])
  }

  RedirectToAyuda(){
    this.router.navigate(['/ayuda'])
  }

}
