import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaiterComponent } from './waiter/waiter.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { ChefComponent } from '../chef/chef.component';

const routes: Routes = [
  {
    path: '',
    component: WaiterComponent
  },
  {
    path: 'orderPlaced',
    component: ChefComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaiterRoutingModule { }
