import { Component, OnInit } from '@angular/core';

import ProductsJson from '../../data.json';
import * as data from '../../data.json';


interface PRODUCTS {
  id: Number;
  name: String;
  price: Number;
  description: String;
  categoryId: Number;
  stock: Number;
}

interface CATEGORIES {
  id: Number;
  nameCategory: String;
}

interface AB {
  id: Number;
  name: String;
  price: Number;
  description: String;
  categoryId: Number;
  stock: Number;
  nameCategory: String;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

/*   private LOGO = require("../../shared/images/1.jpg"); */

  products2: any = (data as any).default;
  ngOnInit(): void {
  }

  products: any = (ProductsJson.productosTemporal as any).default;

/*   Products: PRODUCTS[] = ProductsJson.products;

  Categories: CATEGORIES[] = ProductsJson.categories;
 
  Categories: CATEGORIES[] = ProductsJson.categories;
 */

  constructor(){
    console.log(JSON.stringify(this.products));
    console.log(JSON.stringify(this.products2.productosTemporal));
  }


 /*  const mergeAB = this.Products.map( PRODUCTS => {
    const matched = this.Products.find(CATEGORIES => CATEGORIES.id === PRODUCTS.categoryId)
    if(matched) {
      return {...this.Products, ...matched}
    } else {
      // return companyA element or customize it with your case
    }
  }
) */



}
