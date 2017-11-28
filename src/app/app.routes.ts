import { Routes, CanActivate } from '@angular/router';
import { AuthenGuard } from './core/guards/authen.guard';
export const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'main', loadChildren: './main/main.module#MainModule',canActivate:[AuthenGuard] }
]