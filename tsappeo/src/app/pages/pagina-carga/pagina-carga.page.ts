import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PaginaCargaPageModule } from './pagina-carga.module';

@Component({
  selector: 'app-pagina-carga',
  templateUrl: './pagina-carga.page.html',
  styleUrls: ['./pagina-carga.page.scss'],
})
export class PaginaCargaPage implements OnInit {

  constructor(private router : Router) {}

  siguientePagina(){
    this.router.navigate(['/login'])
  }

  ngOnInit() {
    
    
    setTimeout(() => {
      this.siguientePagina()
      ;
    }, 5000);
    
  }
  

   
}


