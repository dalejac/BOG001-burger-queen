import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaiterComponent } from './waiter/waiter.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';

const routes: Routes = [
  {
    path: '',
    component: WaiterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaiterRoutingModule { }
