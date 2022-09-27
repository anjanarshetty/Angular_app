import { Component } from '@angular/core';
import * as allprod from "../data/allproducts.json";


@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']

})
export class AllproductsComponent{

all:any=(allprod as any).default;
  
}

