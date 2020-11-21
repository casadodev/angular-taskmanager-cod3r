import { ProductDoneComponent } from './components/product/product-done/product-done.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "done",
  component: ProductDoneComponent
},
{
  path: "products/create",
  component: ProductCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
