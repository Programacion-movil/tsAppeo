import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcarAsistenciaPageRoutingModule } from './marcar-asistencia-routing.module';

import { MarcarAsistenciaPage } from './marcar-asistencia.page';

import { ComponentModuleModule } from 'src/app/components/component-module/component-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcarAsistenciaPageRoutingModule,
    ComponentModuleModule
  ],
  declarations: [MarcarAsistenciaPage]
})
export class MarcarAsistenciaPageModule {}
