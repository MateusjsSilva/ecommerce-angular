import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product.model';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [];

  constructor(private _productService: ProductService, private _router: Router) { }
  
  ngOnInit(): void {
    this.listProducts();
  }
  
  listProducts(): void {
    this._productService.getProducts().subscribe(
      returnProduct => {
        this.products = returnProduct.map(
          item => {
            return new Product(
              item.id,
              item.product,
              item.description,
              item.photo,
              item.price
            );
          }
        )
      }
    )
  }
  
  delete(id: number) {
    this._productService.removeProduct(id).subscribe(
      product => {
        this.listProducts();
      },
      err => { alert("Erro ao Excluir") }
    );
  
    this._router.navigate(["/restricted/list"]);
  }
}