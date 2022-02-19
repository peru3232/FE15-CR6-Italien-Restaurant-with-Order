import { ReviewsComponent } from './reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:"",component: HomeComponent
  },
  {
    path:"about-us",component: AboutUsComponent
  },
  {
    path:"contact",component: ContactComponent
  },
  {
    path:"menu",component: MenuComponent
  },
  {
    path:"dishes/:dishId",component: DetailsComponent
  },
  {
    path:"order",component: OrderComponent
  },
  {
    path:"reviews",component: ReviewsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
