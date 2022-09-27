import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CardsComponent } from './cards/cards.component';
import { GrainsComponent } from './grains/grains.component';
import { CartItemsComponent } from './cartitem/cartitem.component';
import { MachineriesComponent } from './machineries/machineries.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { LoginComponent } from './login/login.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { Child1Component } from './grains/child1/child1.component';
//import { ProductModel } from './product-model';
//import { ProductapiService } from './productapi.service';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
//import { Cartitem } from './cartitem';
import { SchemeComponent } from './scheme/scheme.component';




const routes: Routes = [
  {path:'home',component:HomeComponent},

  {path:'cards',component:CardsComponent},
  {path:'grains',component:Child1Component},
 {path:'login',component:LoginComponent},
  {path:'machineris',component:MachineriesComponent},
  {path:'allproducts',component:AllproductsComponent},
  {path:'cartitem',component:CartItemsComponent},
  {path:'counter',component:CounterComponent},
  {path:'counterchild',component:CounterchildComponent},
  //{path:'productmodel',component:ProductModel},
  //{path:'productapi',component:ProductapiService},
  {path:'prod_details',component:ProductdetailsComponent},
  {path:'register',component:RegisterComponent},
  {path:'contact',component:ContactComponent},
  {path:'scheme',component:SchemeComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
