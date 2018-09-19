import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import {HelpComponent} from './help/help.component';

const routes: Routes = [
  {
      path: 'product',
      component: ProductComponent
    },
    {
        path: 'help',
        component: HelpComponent
      },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }