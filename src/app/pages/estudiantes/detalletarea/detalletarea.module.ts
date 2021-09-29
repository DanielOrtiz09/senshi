import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalletareaPageRoutingModule } from './detalletarea-routing.module';

import { DetalletareaPage } from './detalletarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalletareaPageRoutingModule
  ],
  declarations: [DetalletareaPage]
})
export class DetalletareaPageModule {}
