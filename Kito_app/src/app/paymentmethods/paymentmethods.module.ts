import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentmethodsPageRoutingModule } from './paymentmethods-routing.module';

import { PaymentmethodsPage } from './paymentmethods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentmethodsPageRoutingModule
  ],
  declarations: [PaymentmethodsPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class PaymentmethodsPageModule {}
