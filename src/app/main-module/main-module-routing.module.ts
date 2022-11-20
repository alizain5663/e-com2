import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductsComponent } from './main-components/create-products/create-products.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [{ path: '', component: MainModuleComponent,children:[
  {
    path:'create-products',component:CreateProductsComponent
  }
]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
