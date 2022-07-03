import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreLocatorRoutingModule } from './store-locator-routing.module';
import { StoreLocatorComponent } from './store-locator.component';


@NgModule({
  declarations: [
    StoreLocatorComponent
  ],
  imports: [
    CommonModule,
    StoreLocatorRoutingModule
  ]
})
export class StoreLocatorModule { }
