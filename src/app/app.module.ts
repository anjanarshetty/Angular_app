import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//accessing ngModel for 2-way binding
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
//import { CardsComponent } from './cards/cards.component';
import { SearchComponent } from './search/search.component';
import { GrainsComponent } from './grains/grains.component';
import { SquarePipe } from './square.pipe';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { Child1Component } from './grains/child1/child1.component';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cartitem/cartitem.component';
//import { ProductModel } from './product-model';
//import { ProductapiService } from './productapi.service';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { SchemeComponent } from './scheme/scheme.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    //CardsComponent,
    SearchComponent,
    Child1Component,
    AllproductsComponent,
    GrainsComponent,
    CounterComponent,
    CounterchildComponent,
    SquarePipe,
    LoginComponent,
    //ProductModel,
    //ProductapiService,
    CartItemsComponent,
    ProductdetailsComponent,
    RegisterComponent,
    ContactComponent,
    SchemeComponent
    //Child2Component,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }