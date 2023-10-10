import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent  implements OnInit {

  constructor(private router: Router,
    public auth: AuthService) { }

  ngOnInit() {}

  async doLogOut() {
    await this.auth.doLogOut()
    this.router.navigate(['/login'])
  }

  RedirectToAyuda(){
    this.router.navigate(['/ayuda'])
  }

}
