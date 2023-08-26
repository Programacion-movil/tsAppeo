import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    TabsComponent,
    HeaderComponent,

  ],
  exports: [
    TabsComponent,
    HeaderComponent,

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
