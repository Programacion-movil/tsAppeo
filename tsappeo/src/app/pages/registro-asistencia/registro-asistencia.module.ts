import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroAsistenciaPageRoutingModule } from './registro-asistencia-routing.module';

import { RegistroAsistenciaPage } from './registro-asistencia.page';

import { AppComponentsModule } from 'src/app/customComponents/app-components/app-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroAsistenciaPageRoutingModule,
    AppComponentsModule
  ],
  declarations: [RegistroAsistenciaPage]
})
export class RegistroAsistenciaPageModule {}
