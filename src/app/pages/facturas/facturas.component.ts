import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FacturaView } from '../../models/factura-view.models';

@Component({
  selector: 'app-facturas',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './facturas.component.html',
  styleUrl: './facturas.component.css',
})
export class FacturasComponent {
  periodoSeleccionado: string = '';

  facturas: FacturaView[] = [];

  facturaVista: FacturaView | null = null;

  contadorFacturas = 1;

  miembros = [
    { id: 1, nombre: 'Juan Pérez', identidad: '080119990001' },
    { id: 2, nombre: 'María López', identidad: '080119990002' },
    { id: 3, nombre: 'Carlos Mejía', identidad: '080119990003' },
  ];

  servicios = [
    {
      id: 1,
      id_miembro: 1,
      codigo_cliente: 'A-001',
      direccion: 'Barrio Centro',
    },
    {
      id: 2,
      id_miembro: 2,
      codigo_cliente: 'A-002',
      direccion: 'Barrio El Carmen',
    },
    {
      id: 3,
      id_miembro: 3,
      codigo_cliente: 'A-003',
      direccion: 'Barrio San José',
    },
  ];

  generarFacturacion() {
    if (!this.periodoSeleccionado) {
      alert('Ingrese un periodo');
      return;
    }

    this.servicios.forEach((servicio) => {
      const yaExiste = this.facturas.some(
        (f) =>
          f.codigo_cliente === servicio.codigo_cliente &&
          f.periodo === this.periodoSeleccionado,
      );

      if (!yaExiste) {
        const miembro = this.miembros.find((m) => m.id === servicio.id_miembro);

        const consumo = Math.floor(Math.random() * 30) + 5;

        const montoBase = 50;
        const precioM3 = 5;

        const total = montoBase + consumo * precioM3;
        const codigoFactura =
          'FAC-' + this.contadorFacturas.toString().padStart(4, '0');

        const nuevaFactura: FacturaView = {
          id_factura: this.contadorFacturas,

          codigo_factura: codigoFactura,

          codigo_cliente: servicio.codigo_cliente,

          nombre_cliente: miembro?.nombre || '',

          identidad: miembro?.identidad || '',

          direccion_servicio: servicio.direccion,

          periodo: this.periodoSeleccionado,

          consumo: consumo,

          monto_total: total,

          fecha_emision: new Date().toLocaleDateString(),

          fecha_vencimiento: '20/03/2026',

          estado: 'Pendiente',
        };

        this.facturas.push(nuevaFactura);

        this.contadorFacturas++;
      }
    });
  }

  verFactura(f: FacturaView) {
    this.facturaVista = f;
  }

  anularFactura(f: FacturaView) {
    const confirmar = confirm('¿Desea anular esta factura?');

    if (confirmar) {
      f.estado = 'Anulada';
    }
  }

  imprimir() {
    window.print();
  }
}
