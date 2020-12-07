import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WaiterRoutingModule } from './waiter-routing.module';
import { WaiterComponent } from './waiter/waiter.component';
import { MenuComponent } from './menu/menu.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { TicketComponent } from './ticket/ticket.component'; 

@NgModule({
  declarations: [
    WaiterComponent,
    MenuComponent,
    BreakfastComponent,
    LunchComponent,
    TicketComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    WaiterRoutingModule
  ]
})
export class WaiterModule { }
