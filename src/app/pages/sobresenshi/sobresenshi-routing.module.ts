import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobresenshiPage } from './sobresenshi.page';

const routes: Routes = [
  {
    path: '',
    component: SobresenshiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobresenshiPageRoutingModule {}
