import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { CreateProductsComponent } from './main-components/create-products/create-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    FooterComponent,
    CreateProductsComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MainModuleModule { }
