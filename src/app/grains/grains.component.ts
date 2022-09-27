import { Component, OnInit ,Input} from '@angular/core';
import { CartService } from '../cart.service';
import { Cartitem } from '../cartitem';
//import { CartItemsComponent } from '../cartitem/cartitem.component';
import Swal from 'sweetalert2';
//import { Router } from '@angular/router';
@Component({
  selector: 'app-grains',
  templateUrl: './grains.component.html',
  styleUrls: ['./grains.component.css']
})
export class GrainsComponent implements OnInit {

  constructor(private cartsvc:CartService) { }
  //Add to cart
  cart:Cartitem={
    id:0,
    pname:'',
    pdesc:'',
    price:0,
    img:'',
    quantity:1,
    totalPrice:1    
  }
  quantity:number=1;

  addToCart(product:any){
    this.cart.id=product.id;
    this.cart.pname=product.pname;
    this.cart.pdesc=product.pdesc;
    this.cart.price=product.price;
    this.cart.img=product.img;
    this.cart.price=product.price;
    this.cart.totalPrice=product.totalPrice;
    this.cart.quantity=this.quantity;
    this.cart.id=product.id;
    this.cartsvc.addToCart(this.cart);
    console.log(product.id);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'success',
      title: 'Item added successfully'
    })
    this.cartsvc.getCount();
  }
  //Input Class Decorator
  @Input()product:any
/*
  onClick(){
    this.router.navigate([''])
  }*/
  ngOnInit(): void {
  }

  productDetail=true;

  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }

  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa fa-plus';
    }
    else{
      content='fa fa-minus';
    }
    return content;
  }

}
