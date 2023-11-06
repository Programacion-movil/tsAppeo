import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcarAsistenciaPageRoutingModule } from './marcar-asistencia-routing.module';

import { MarcarAsistenciaPage } from './marcar-asistencia.page';

import { AppComponentsModule } from 'src/app/customComponents/app-components/app-components.module';

import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcarAsistenciaPageRoutingModule,
    AppComponentsModule
  ],
  declarations: [MarcarAsistenciaPage],
  providers: [
    LocationAccuracy,
  ]
  
})
export class MarcarAsistenciaPageModule {}
