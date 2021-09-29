import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioestudiantePageRoutingModule } from './inicioestudiante-routing.module';

import { InicioestudiantePage } from './inicioestudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioestudiantePageRoutingModule
  ],
  declarations: [InicioestudiantePage]
})
export class InicioestudiantePageModule {}
