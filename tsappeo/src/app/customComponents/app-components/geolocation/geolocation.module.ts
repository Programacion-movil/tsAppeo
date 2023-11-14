import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeolocationComponent } from './geolocation.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GeolocationComponent
  ],
  exports: [
    GeolocationComponent
  ]
})
export class GeolocationModule { }
