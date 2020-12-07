import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { WaiterModule } from '../app/waiter/waiter.module';
import { HomeComponent } from './home/home.component';
import { ProductsService } from './products.service';
import { ChefModule } from './chef/chef.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    WaiterModule,
    ChefModule
  ],
  providers:
  [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
