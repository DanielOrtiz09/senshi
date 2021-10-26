import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogintipousuarioPageRoutingModule } from './logintipousuario-routing.module';

import { LogintipousuarioPage } from './logintipousuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogintipousuarioPageRoutingModule
  ],
  declarations: [LogintipousuarioPage]
})
export class LogintipousuarioPageModule {}
