import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CarouselComponent } from './carousel/carousel.component';
const routes: Routes = [
  { path: 'product-list', component: ProductListComponent},
  { path: 'carousel', component: CarouselComponent},
  { path: '', component: CarouselComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

   }
