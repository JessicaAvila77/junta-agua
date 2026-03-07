import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MiembrosComponent } from './pages/miembros/miembros.component';
import { ConstanciasComponent } from './pages/constancias/constancias.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { MedidoresComponent } from './pages/medidores/medidores.component';
import { LecturasComponent } from './pages/lecturas/lecturas.component';
import { TarifasComponent } from './pages/tarifas/tarifas.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { PagosComponent } from './pages/pagos/pagos.component';



export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path: 'miembros', component: MiembrosComponent},
    {path:'constancias', component:ConstanciasComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'medidores', component: MedidoresComponent},
    {path: 'lecturas', component: LecturasComponent},
    {path: 'tarifas', component: TarifasComponent},
    {path: 'facturas', component: FacturasComponent},
    {path: 'pagos', component: PagosComponent},

];
