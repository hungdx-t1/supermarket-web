import { Routes } from '@angular/router';
import { ShoppingComponent } from './core/shopping/shopping.component';
import { DetailComponent } from './core/detail/detail.component';
import { HomeComponent } from './core/home/home.component';
import { StockItemComponent } from './core/stock/stock-item/stock-item.component';
import { CreateStockComponent } from './core/stock/create-stock/create-stock.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'shopping-cart', component: ShoppingComponent},
    { path: 'detail/:id', component: DetailComponent},
    { path: 'stock', component: StockItemComponent},
    { path: 'stock/create', component: CreateStockComponent}
];
