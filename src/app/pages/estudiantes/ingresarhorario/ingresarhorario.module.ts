import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarhorarioPageRoutingModule } from './ingresarhorario-routing.module';

import { IngresarhorarioPage } from './ingresarhorario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarhorarioPageRoutingModule
  ],
  declarations: [IngresarhorarioPage]
})
export class IngresarhorarioPageModule {}
