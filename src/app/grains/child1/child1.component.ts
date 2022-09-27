import { Component, OnInit } from '@angular/core';
import * as grains from "../deals.json";
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
 
  all:any=(grains as any).default;
}
