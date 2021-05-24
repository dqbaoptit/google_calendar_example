import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrayerDetailPageRoutingModule } from './prayer-detail-routing.module';

import { PrayerDetailPage } from './prayer-detail.page';
import { HeaderModule } from 'src/app/@modular/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrayerDetailPageRoutingModule,
    HeaderModule
  ],
  declarations: [PrayerDetailPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PrayerDetailPageModule {}
