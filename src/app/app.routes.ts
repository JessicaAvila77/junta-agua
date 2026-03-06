import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MiembrosComponent } from './pages/miembros/miembros.component';
import { ConstanciasComponent } from './pages/constancias/constancias.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';



export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path: 'miembros', component: MiembrosComponent},
    {path:'constancias', component:ConstanciasComponent},
    {path: 'servicios', component: ServiciosComponent},

];
