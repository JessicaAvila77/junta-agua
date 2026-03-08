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
import { CajaDiaComponent } from './pages/caja-dia/caja-dia.component';
import { AcuerdosComponent } from './pages/acuerdos/acuerdos.component';
import { SuspensionServicioComponent } from './pages/suspension-servicio/suspension-servicio.component';
import { PerfilProyectoComponent } from './pages/proyectos/perfil-proyecto/perfil-proyecto.component';
import { CooperantesComponent } from './pages/proyectos/cooperantes/cooperantes.component';
import { PresupuestoComponent } from './pages/proyectos/presupuesto/presupuesto.component';
import { FacturasVencidasComponent } from './pages/reportes/facturas-vencidas/facturas-vencidas.component';
import { ServiciosSuspendidosComponent } from './pages/reportes/servicios-suspendidos/servicios-suspendidos.component';
import { IngresosDiaComponent } from './pages/reportes/ingresos-dia/ingresos-dia.component';
import { AcuerdosPagoComponent } from './pages/reportes/acuerdos-pago/acuerdos-pago.component';
import { PresupuestoProyectosComponent } from './pages/reportes/presupuesto-proyectos/presupuesto-proyectos.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'miembros', component: MiembrosComponent },
  { path: 'constancias', component: ConstanciasComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'medidores', component: MedidoresComponent },
  { path: 'lecturas', component: LecturasComponent },
  { path: 'tarifas', component: TarifasComponent },
  { path: 'facturas', component: FacturasComponent },
  { path: 'pagos', component: PagosComponent },
  { path: 'caja-dia', component: CajaDiaComponent },
  { path: 'acuerdos', component: AcuerdosComponent },
  { path: 'suspension-servicio', component: SuspensionServicioComponent },
  { path: 'perfil-proyecto', component: PerfilProyectoComponent },
  { path: 'cooperantes', component: CooperantesComponent },
  { path: 'presupuesto', component: PresupuestoComponent },
  { path: 'facturas-vencidas', component: FacturasVencidasComponent},
  { path: 'servicios-suspendidos', component: ServiciosSuspendidosComponent},
  { path: 'ingresos-dia', component: IngresosDiaComponent},
  { path: 'acuerdos-pago', component: AcuerdosPagoComponent},
  { path: 'presupuesto-proyectos', component: PresupuestoProyectosComponent},

];
