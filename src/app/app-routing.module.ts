import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'waiter',
    loadChildren: () => import ('./waiter/waiter.module').then(m => m.WaiterModule)
  },
  {
    path: 'chef',
    loadChildren: () => import ('./chef/chef.module').then(m => m.ChefModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
