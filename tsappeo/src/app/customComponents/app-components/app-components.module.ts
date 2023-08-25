import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  declarations: [
    TabsComponent,

  ],
  exports: [
    TabsComponent,

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AppComponentsModule { }
