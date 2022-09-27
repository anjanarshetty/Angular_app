import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
//Cart count
import { CartService } from '../cart.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //Dependency injection
  constructor(private authService:UserService,private cartSvc:CartService) { }
  //constructor(){}
  title = 'FARM-EASY';
  //PROPERTY BINDING
  public logo="https://www.kindpng.com/picc/m/179-1791449_transparent-green-leaf-logo-hd-png-download.png";
  //EVENT BINDING
  onSearch()
  {
    alert("Will contact shortly");
  }

  //Accessing the Search Component
  //Property
  productentered: string=' '  //Laptop
  cartCount: number=0;
  auth:boolean=false;
  //Event
  search_product(product_name:string):void{ //Laptop
    if(!product_name)
    {
      this.productentered=' ';
    }
    this.productentered=product_name; //Laptop
    console.log(product_name)
  }
  //Auth Service
  ngOnInit(): void {
    
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );
    //Cart count
    this.cartSvc.getCartItems().subscribe (     
      (response) =>
       {        
        this.cartCount=response.length;
        console.log(this.cartCount);
       }
     ) 
    this.cartSvc.countSubject.subscribe (     
      (response) =>
       {        
        this.cartCount=response;
        console.log(this.cartCount);
       }
     )
  }

}