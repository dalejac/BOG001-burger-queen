import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaiterRoutingModule } from './waiter-routing.module';
import { WaiterComponent } from './waiter/waiter.component';
import { MenuComponent } from './menu/menu.component';
import { BreakfastComponent } from './breakfast/breakfast.component';


@NgModule({
  declarations: [
    WaiterComponent,
    MenuComponent,
    BreakfastComponent
  ],

  imports: [
    CommonModule,
    WaiterRoutingModule
  ]
})
export class WaiterModule { }
