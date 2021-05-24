import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentmethodsPage } from './paymentmethods.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentmethodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [RouterModule],
})
export class PaymentmethodsPageRoutingModule {}
