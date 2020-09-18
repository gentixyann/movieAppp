import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstRegisterPage } from './first-register.page';

const routes: Routes = [
  {
    path: '',
    component: FirstRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstRegisterPageRoutingModule {}
