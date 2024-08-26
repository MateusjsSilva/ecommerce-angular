import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterProductComponent } from '../register-product/register-product.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { RestrictedComponent } from '../restricted.component';
import { GuardGuard } from 'src/app/guard.guard';

const restrictedRoutes: Routes = [
  {
    path: 'restricted', component: RestrictedComponent, children: [
      { path: 'register', component: RegisterProductComponent, canActivate: [GuardGuard]},
      { path: 'list', component: ProductListComponent, canActivate: [GuardGuard] },
      { path: 'edit/:id', component: UpdateProductComponent, canActivate: [GuardGuard]}
    ]
  },

  { path: '', redirectTo: '/restricted/list', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(restrictedRoutes)],
  exports: [RouterModule]
})
export class RestrictedRoutingModule { }