import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products: Product[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts(): void {
    this._productService.getProducts().subscribe(
      returnedProduct => {
        this.products = returnedProduct.map(
          item => {
            return new Product(
              item.id,
              item.product,
              item.description,
              item.photo,
              item.price
            );
          }
        );
      }
    );
  }
}