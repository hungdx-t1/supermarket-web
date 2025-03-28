import { Routes } from '@angular/router';
import { ShoppingComponent } from './core/shopping/shopping.component';
import { DetailComponent } from './core/detail/detail.component';
import { HomeComponent } from './core/home/home.component';
import { CreateStockComponent } from './core/stock/create-stock/create-stock.component';
import { StockListComponent } from './core/stock/stock-list/stock-list.component';
import { StockInfoComponent } from './core/stock/stock-info/stock-info.component';
import { CreateStockApiComponent } from './core/stock-api/create-stock-api/create-stock-api.component';
import { StockListApiComponent } from './core/stock-api/stock-list-api/stock-list-api.component';
import { StockInfoApiComponent } from './core/stock-api/stock-info-api/stock-info-api.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'home', component: HomeComponent},
    { path: 'shopping-cart', component: ShoppingComponent},
    { path: 'detail/:id', component: DetailComponent},
    { path: 'stock', component: StockListComponent},
    { path: 'stock/create', component: CreateStockComponent},
    { path: 'stock/info/:code', component: StockInfoComponent},
    { path: 'api/stock', component: StockListApiComponent},
    { path: 'api/stock/create', component: CreateStockApiComponent},
    { path: 'api/stock/info/:code', component: StockInfoApiComponent},
    { path: '**', redirectTo: '/home'}
];
