import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppTabsComponent } from './app-tabs/app-tabs.component';



@NgModule({
  declarations: [
    AppTabsComponent
  ],
  exports: [
    AppTabsComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ComponentModuleModule { }
