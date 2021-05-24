import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { PrayPageRoutingModule } from './pray-routing.module';

import { PrayPage } from './pray.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PrayPageRoutingModule
  ],
  declarations: [PrayPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class PrayPageModule {}
