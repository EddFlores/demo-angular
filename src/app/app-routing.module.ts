import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductComponent } from './products/details-product/details-product.component';
import { Error404Component } from './error404/error404.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './products/product.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'products', component: ProductComponent},
  {path:'product/:id', component:DetailsProductComponent},
  {path:'**', component:Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
