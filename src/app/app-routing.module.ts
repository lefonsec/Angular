import { ProductCreateComponent } from './componets/product/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }  from './viwes/home/home.component';
import { ProductCrudComponent } from './viwes/product-crud/product-crud.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},{
  path: "products",
  component: ProductCrudComponent
},{ 
  path:"products/create",
  component: ProductCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
