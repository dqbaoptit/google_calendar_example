import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountSettingPageRoutingModule } from './account-setting-routing.module';

import { AccountSettingPage } from './account-setting.page';
import { HeaderModule } from '../@modular/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountSettingPageRoutingModule,
    HeaderModule
  ],
  declarations: [AccountSettingPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AccountSettingPageModule {}
