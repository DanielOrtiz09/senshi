import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresartareaPageRoutingModule } from './ingresartarea-routing.module';

import { IngresartareaPage } from './ingresartarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresartareaPageRoutingModule
  ],
  declarations: [IngresartareaPage]
})
export class IngresartareaPageModule {}
