import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';

interface ServicioSuspendido {
  codigo_cliente: string;
  cliente: string;
  direccion: string;
  fecha_suspension: string;
  motivo: string;
  estado: string;
}

@Component({
  selector: 'app-servicios-suspendidos',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './servicios-suspendidos.component.html',
  styleUrls: ['./servicios-suspendidos.component.css'],
})
export class ServiciosSuspendidosComponent {
  servicios: ServicioSuspendido[] = [
    {
      codigo_cliente: 'A001',
      cliente: 'Juan Pérez',
      direccion: 'Barrio El Centro',
      fecha_suspension: '2024-03-10',
      motivo: 'Mora',
      estado: 'Suspendido',
    },

    {
      codigo_cliente: 'A002',
      cliente: 'María López',
      direccion: 'Colonia Las Flores',
      fecha_suspension: '2024-03-15',
      motivo: 'Mantenimiento',
      estado: 'Suspendido',
    },

    {
      codigo_cliente: 'A003',
      cliente: 'Carlos Gómez',
      direccion: 'Barrio San José',
      fecha_suspension: '2024-03-18',
      motivo: 'Mora',
      estado: 'Suspendido',
    },
  ];
}
