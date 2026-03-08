import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

interface Pago {
  id_pago: number;
  codigo_factura: string;
  codigo_servicio: string;
  nombre_cliente: string;
  periodo: string;
  monto_pagado: number;
  fecha_pago: string;
  numero_recibo: string;
}

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css'],
})
export class PagosComponent {
  busqueda: string = '';

  facturas: any[] = [
    {
      codigo_factura: 'FAC-0001',
      codigo_servicio: 'A-001',
      nombre_cliente: 'Jessica Avila',
      periodo: 'Enero 2026',
      monto_total: 150,
      fecha_vencimiento: '2026-01-20',
      estado: 'Pagada',
    },

    {
      codigo_factura: 'FAC-0002',
      codigo_servicio: 'A-001',
      nombre_cliente: 'Jessica Avila',
      periodo: 'Febrero 2026',
      monto_total: 170,
      fecha_vencimiento: '2026-02-20',
      estado: 'Pendiente',
    },

    {
      codigo_factura: 'FAC-0003',
      codigo_servicio: 'A-015',
      nombre_cliente: 'Jessica Avila',
      periodo: 'Marzo 2026',
      monto_total: 160,
      fecha_vencimiento: '2026-03-05',
      estado: 'Pendiente',
    },
  ];

  facturasCliente: any[] = [];

  facturaSeleccionada: any = null;

  pagos: Pago[] = [];

  contadorPagos = 1;

  buscarCliente() {
    this.facturasCliente = this.facturas.filter(
      (f) =>
        f.nombre_cliente.toLowerCase().includes(this.busqueda.toLowerCase()) ||
        f.codigo_servicio.toLowerCase().includes(this.busqueda.toLowerCase()),
    );
  }

  seleccionarFactura(f: any) {
    this.facturaSeleccionada = f;

    // limpiar recibo anterior
    this.pagos = [];
  }

  registrarPago() {
    if (!this.facturaSeleccionada) {
      alert('Seleccione una factura');
      return;
    }

    const recibo = 'REC-' + this.contadorPagos.toString().padStart(4, '0');

    const nuevoPago: Pago = {
      id_pago: this.contadorPagos,

      codigo_factura: this.facturaSeleccionada.codigo_factura,

      codigo_servicio: this.facturaSeleccionada.codigo_servicio,

      nombre_cliente: this.facturaSeleccionada.nombre_cliente,

      periodo: this.facturaSeleccionada.periodo,

      monto_pagado: this.facturaSeleccionada.monto_total,

      fecha_pago: new Date().toLocaleDateString(),

      numero_recibo: recibo,
    };

    this.pagos.push(nuevoPago);

    this.facturaSeleccionada.estado = 'Pagada';

    this.contadorPagos++;
  }

  imprimir() {
    const contenido = document.getElementById('recibo')?.innerHTML;

    const ventana = window.open('', '', 'width=600,height=600');

    if (ventana) {
      ventana.document.write(`
<html>
<head>
<title>Recibo</title>

<style>
body{
font-family: Arial, sans-serif;
text-align:center;
padding:40px;
}
hr{
margin:15px 0;
}
button{
display:none;
}
</style>

</head>

<body>

${contenido}

</body>
</html>
`);

      ventana.document.close();
      ventana.focus();
      ventana.print();

      ventana.onafterprint = () => ventana.close();
    }
  }

  esVencida(f: any) {
    const hoy = new Date();
    const vencimiento = new Date(f.fecha_vencimiento);

    return f.estado === 'Pendiente' && vencimiento < hoy;
  }
}
