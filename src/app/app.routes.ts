import { Routes } from '@angular/router';

// Import components
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ConfiguratorComponent } from './modules/configurator/configurator.component';
import { LogsComponent } from './modules/logs/logs.component';

// Import guards
import { AuthGuard } from './core/auth/auth.guard';
import { RoleGuard } from './core/auth/role.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'configurator', component: ConfiguratorComponent, canActivate: [RoleGuard] },
  { path: 'logs', component: LogsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];
