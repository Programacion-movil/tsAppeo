import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcarAsistenciaPageRoutingModule } from './marcar-asistencia-routing.module';

import { MarcarAsistenciaPage } from './marcar-asistencia.page';

import { ComponentsModule } from 'src/app/components/components.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcarAsistenciaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MarcarAsistenciaPage]
})
export class MarcarAsistenciaPageModule {}
