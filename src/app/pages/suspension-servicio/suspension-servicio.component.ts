import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SuspensionServicio } from '../../models/suspension-servicio.model';

@Component({
  selector: 'app-suspension-servicio',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './suspension-servicio.component.html',
  styleUrls: ['./suspension-servicio.component.css'],
})
export class SuspensionServicioComponent {
  busqueda: string = '';

  servicioSeleccionado: any = null;

  motivo: string = '';
  fechaSuspension: string = '';

  /* SERVICIOS CON MORA */

  serviciosMorosos: any[] = [
    {
      id_servicio: 1,
      codigo_cliente: 'A001',
      cliente: 'Juan Pérez',
      facturas_vencidas: 2,
      deuda: 350,
    },

    {
      id_servicio: 2,
      codigo_cliente: 'A002',
      cliente: 'Ana López',
      facturas_vencidas: 3,
      deuda: 510,
    },
  ];

  /* HISTORIAL SUSPENSIONES */

  suspensiones: SuspensionServicio[] = [
    {
      id_suspension: 1,
      id_servicio: 1,
      codigo_cliente: 'A001',
      nombre_cliente: 'Juan Pérez',
      direccion_servicio: 'Barrio Centro',
      tipo_servicio: 'Doméstico',
      fecha_suspension: '2026-03-01',
      motivo: 'Mora',
      estado: 'Suspendido',
    },
  ];

  buscarServicio() {
    if (!this.busqueda) return;

    this.servicioSeleccionado = {
      id_servicio: 5,
      codigo_cliente: this.busqueda,
      nombre_cliente: 'Cliente encontrado',
      direccion_servicio: 'Colonia Nueva',
      tipo_servicio: 'Doméstico',
    };
  }

  suspenderPorMora(servicio: any) {
    const nuevaSuspension: SuspensionServicio = {
      id_suspension: this.suspensiones.length + 1,
      id_servicio: servicio.id_servicio,
      codigo_cliente: servicio.codigo_cliente,
      nombre_cliente: servicio.cliente,
      direccion_servicio: 'Servicio registrado',
      tipo_servicio: 'Doméstico',
      fecha_suspension: new Date().toISOString().split('T')[0],
      motivo: 'Mora',
      estado: 'Suspendido',
    };

    this.suspensiones.push(nuevaSuspension);
  }

  suspenderServicio() {
    if (!this.servicioSeleccionado || !this.motivo || !this.fechaSuspension)
      return;

    const nuevaSuspension: SuspensionServicio = {
      id_suspension: this.suspensiones.length + 1,
      id_servicio: this.servicioSeleccionado.id_servicio,

      codigo_cliente: this.servicioSeleccionado.codigo_cliente,
      nombre_cliente: this.servicioSeleccionado.nombre_cliente,
      direccion_servicio: this.servicioSeleccionado.direccion_servicio,
      tipo_servicio: this.servicioSeleccionado.tipo_servicio,

      fecha_suspension: this.fechaSuspension,
      motivo: this.motivo,

      estado: 'Suspendido',
    };

    this.suspensiones.push(nuevaSuspension);

    this.servicioSeleccionado = null;
    this.motivo = '';
    this.fechaSuspension = '';
  }

  reconectarServicio(s: SuspensionServicio) {
    s.estado = 'Reconectado';
    s.fecha_reconexion = new Date().toISOString().split('T')[0];
  }
}
