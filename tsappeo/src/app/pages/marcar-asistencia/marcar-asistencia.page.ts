import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-marcar-asistencia',
  templateUrl: './marcar-asistencia.page.html',
  styleUrls: ['./marcar-asistencia.page.scss'],
})
export class MarcarAsistenciaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  RedirectToList(){
    this.router.navigate(['/registro-asistencia'])
  }

}
