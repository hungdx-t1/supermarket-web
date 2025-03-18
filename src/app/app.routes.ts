import { Routes } from '@angular/router';
import { ShoppingComponent } from './core/shopping/shopping.component';
import { DetailComponent } from './core/detail/detail.component';

export const routes: Routes = [
    { path: '', component: ShoppingComponent},
    { path: 'detail/:id', component: DetailComponent}
];
