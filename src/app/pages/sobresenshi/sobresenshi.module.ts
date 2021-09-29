import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobresenshiPageRoutingModule } from './sobresenshi-routing.module';

import { SobresenshiPage } from './sobresenshi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobresenshiPageRoutingModule
  ],
  declarations: [SobresenshiPage]
})
export class SobresenshiPageModule {}
