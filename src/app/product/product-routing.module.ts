import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from '../products/create-product/create-product.component';

const routes: Routes = [{ path: '', component: ProductComponent },
{path:'product-list',component:ProductListComponent},
{path:'create-product',component:CreateProductComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
