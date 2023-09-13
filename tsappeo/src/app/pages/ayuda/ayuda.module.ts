import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyudaPageRoutingModule } from './ayuda-routing.module';

import { AyudaPage } from './ayuda.page';
import { AppComponentsModule } from 'src/app/customComponents/app-components/app-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyudaPageRoutingModule,
    AppComponentsModule
  ],
  declarations: [AyudaPage]
})
export class AyudaPageModule {}
