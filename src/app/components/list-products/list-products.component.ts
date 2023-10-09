import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {

  listProducts:Product[]=[
    {
      name:'Coca Cola',
      description:'Bebida con azucar',
      price:4,
      stock:200
    },
    {
      name:'Corona',
      description:'Bebida con alcochol',
      price:5,
      stock:300
    }
  ];
}
