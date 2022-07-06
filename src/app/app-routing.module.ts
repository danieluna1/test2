import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
const routes: Routes = [
{path: 'products', component: ProductsComponent},
{ path: 'store-locator', loadChildren: () => import('./pages/store-locator/store-locator.module').then(m => m.StoreLocatorModule) },
{ path: '', loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule) },
{ path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
{path: '**', redirectTo:'',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
