import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';

import { AppComponentsModule } from 'src/app/customComponents/app-components/app-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    AppComponentsModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
