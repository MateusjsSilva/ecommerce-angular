import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  
  public productId: number = 0;
  public product: Product = new Product("","", "", "", 0);
  
  constructor(private _productService: ProductService, private _router: Router,
    private _activatedRoute: ActivatedRoute) {
      this._activatedRoute.params.subscribe(params => this.productId = params['id']);
  }
  
  ngOnInit(): void {
    this.listProduct();
  }

  listProduct(): void {
    this._productService.getProduct(this.productId).subscribe(
      (res: any) => {
        this.product = new Product(
          res[0].id,
          res[0].product,
          res[0].description,
          res[0].photo,
          res[0].price
        );
      }
    );
  }
  
  update(id: any) {
    this._productService.updateProduct(id, this.product).subscribe(
      product => { this.product = new Product("", "", "", "", 0); },
      err => { alert("Erro ao atualizar"); }
    );
  
    this._router.navigate(["restricted/list"]);
  }
}