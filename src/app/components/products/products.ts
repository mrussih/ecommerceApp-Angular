import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

 
@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products:Iproduct[];
  categories:Icategory[];
  selectedCatId:number = 0;
  totalOrderPrice:number = 0;
  constructor(){
    this.products = [
      {id:100, name:'Dell laptop', price:50000, quantity:3, imgURL:'https://imagefaker.access.mx.com/440x320/282828/eae0d0/?retina=1', catId:1},
      {id:200, name:'HP laptop', price:40000, quantity:0, imgURL:'https://imagefaker.access.mx.com/440x320/282828/eae0d0/?retina=1', catId:1},
      {id:300, name:'Iphone', price:30000, quantity:2, imgURL:'https://imagefaker.access.mx.com/440x320/282828/eae0d0/?retina=1', catId:2},
      {id:400, name:'Oppo', price:60000, quantity:1, imgURL:'https://imagefaker.access.mx.com/440x320/282828/eae0d0/?retina=1', catId:2},
      {id:500, name:'Samsung tablet', price:20000, quantity:0, imgURL:'https://imagefaker.access.mx.com/440x320/282828/eae0d0/?retina=1', catId:3},
      {id:600, name:'Lenovo tablet', price:10000, quantity:4, imgURL:'https://imagefaker.access.mx.com/440x320/282828/eae0d0/?retina=1', catId:3},
    ]
    this.categories=[
      {id:1, name:'Laptop'},
      {id:2, name:'Mobile'},
      {id:3, name:'Tablet'}
    ]
  }
  buy(count:string , price:number){
    // this.totalOrderPrice += parseInt(count)*price
    // this.totalOrderPrice += Number(count) * price
    this.totalOrderPrice += +count * price
  }

  change(){
    this.selectedCatId = 2  
  } // Two Way Binding (View <=> controller)
} 
