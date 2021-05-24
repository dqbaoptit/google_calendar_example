import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TonggiaophanPage } from './tonggiaophan.page';

const routes: Routes = [
  {
    path: '',
    component: TonggiaophanPage
  },
  {
    path: 'parish-news',
    loadChildren: () => import('./parish-news/parish-news.module').then(m => m.ParishNewsPageModule)
  },
  {
    path: 'archdiocese-detail',
    loadChildren: () => import('./archdiocese-detail/archdiocese-detail.module').then( m => m.ArchdioceseDetailPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [RouterModule],
})
export class TonggiaophanPageRoutingModule { }
