import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatechismPageRoutingModule } from './catechism-routing.module';

import { CatechismPage } from './catechism.page';
import { HeaderModule } from 'src/app/@modular/header/header.module';
import { SearchBarNavModule } from 'src/app/@modular/search-bar-nav/search-bar-nav.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatechismPageRoutingModule,
    HeaderModule,
    SearchBarNavModule
  ],
  declarations: [CatechismPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CatechismPageModule {}
