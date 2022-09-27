import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  //Array - *ngFor
  //key:value
  Products: any[] = [
    {
      "productname": "Information on National Livestock Mission"
    },
    {
      "productname": " Information on Agriclinic and Agribusiness Centres Scheme"
    },
    {
      "productname": "Agriculture Infrastructure Fund (AIF) in Agri Infrastructure Loan"
    },
    {
      "productname": "Agricultural Marketing Infrastructure (AMI) in Agri Infrastructure Loan"
    },
    {
      "productname": "Agri-Clinic and Agribusiness Centers Scheme (ACABC) in Agri Infrastructure Loan"
    }

  ]
  //Event to hide Products
  isVisible: boolean = true;
  hide_products() {
    this.isVisible = !this.isVisible;
  }
  //*ngSwitch
  //product = 'Laptop'

  //property errorcolor for style binding using ternary operator
  errorcolor: string = 'red'

  //Array for style binding with ternary operator with ngSwitch

  ProductDetails = [
    {
      "id": "F01",
      "pname": "Pottasium",
      "status": "Active",
      "color": "green"
    },
    {
      "id": "G01",
      "pname": "Arecanut Plant",
      "status": "InActive",
      "color": "red"
    },
    {
      "id": "G02",
      "pname": "Coconut Plant",
      "status": "Out of Stock",
      "color": "blue"
    },
    {
      "id": "G03",
      "pname": "Chilly seed",
      "status": "Active",
      "color": "green"
    },
    {
      "id": "G04",
      "pname": "Brinjal",
      "status": "InActive",
      "color": "red"
    },
    {
      "id": "M01",
      "pname": "Water Pump(1.5hp)",
      "status": "Active",
      "color": "green"
    },
    {
      "id": "M02",
      "pname": "Single Plough",
      "status": "Out of Stock",
      "color": "blue"
    },
    {
        "id": "M03",
        "pname": "Double Plough",
        "status": "Active",
        "color": "green"
      },
      {
        "id": "M04",
        "pname": "Tractor",
        "status": "Active",
        "color": "green"
      }
  ]

  //Style Binding using a function
  getColor() {
    return 'blue';
  }
  //ngClass - created an instance for the class products
  prod:products=new products();
  //using an array we can access the properties and bind them to ngClass
  prod_array:string[]=['blue'];
  ngOnInit(): void {
  }
}
//ngClass
class products{
  blue:boolean=true;
  shadow:boolean=true;
  size:boolean=true;
}