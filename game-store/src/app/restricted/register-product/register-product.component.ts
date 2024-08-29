import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent {

  public product: Product = new Product();

  constructor(private _productService: ProductService, private _router: Router) { }

  register(): void {
    this._productService.registerProduct(this.product).subscribe(
      product => {
        this.product = new Product();
        alert("Cadastro Efetuado com sucesso");
      },
      err => {
        alert("Erro ao Cadastrar");
      }
    );

    this._router.navigate(["restricted/list"]);
  }
}