import { Component, OnInit } from '@angular/core';

import ProductsJson from '../../data.json';


interface PRODUCTS {
  id: Number;
  name: String;
  price: Number;
  description: String;
  categoryId: Number;
  stock: Number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  ngOnInit(): void {
  }

  Products: PRODUCTS[] = ProductsJson.products;
 
  constructor(){
    console.log(JSON.stringify(this.Products));
  }

}
