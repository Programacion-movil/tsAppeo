import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppTabsComponent } from './app-tabs/app-tabs.component';
import { AppSideMenuComponent } from './app-side-menu/app-side-menu.component';



@NgModule({
  declarations: [
    AppHeaderComponent,
    AppTabsComponent,
    AppSideMenuComponent
  ],
  exports: [
    AppHeaderComponent,
    AppTabsComponent,
    AppSideMenuComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class Components { }