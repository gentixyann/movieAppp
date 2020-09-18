import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstRegisterPageRoutingModule } from './first-register-routing.module';

import { FirstRegisterPage } from './first-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstRegisterPageRoutingModule
  ],
  declarations: [FirstRegisterPage]
})
export class FirstRegisterPageModule {}
