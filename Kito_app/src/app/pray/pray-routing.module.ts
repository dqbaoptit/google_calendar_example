import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrayPage } from './pray.page';

const routes: Routes = [
  {
    path: '',
    component: PrayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [RouterModule],
})
export class PrayPageRoutingModule {}
