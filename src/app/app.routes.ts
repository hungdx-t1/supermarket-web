import { Routes } from '@angular/router';
import { ShoppingComponent } from './core/shopping/shopping.component';
import { DetailComponent } from './core/detail/detail.component';
import { HomeComponent } from './core/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'shopping-cart', component: ShoppingComponent},
    { path: 'detail/:id', component: DetailComponent},
];
