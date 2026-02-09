import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products:Iproduct[]

  constructor(){
    this.products = [
      {
        id : 1,
        name : 'milk',
        price : 1000,
        quantity : 1,
        imgURL : 'hello',
        catId : 1
      },
    ]
  }
}
