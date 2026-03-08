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
  cuotasFactura: any[] = [];

  facturas: any[] = [
    {
      id_factura: 1,
      codigo_factura: 'FAC-0001',
      codigo_servicio: 'A-001',
      nombre_cliente: 'Jessica Avila',
      periodo: 'Enero 2026',
      monto_total: 150,
      fecha_vencimiento: '2026-01-20',
      estado: 'Pagada',
    },

    {
      id_factura: 2,
      codigo_factura: 'FAC-0002',
      codigo_servicio: 'A-001',
      nombre_cliente: 'Jessica Avila',
      periodo: 'Febrero 2026',
      monto_total: 170,
      fecha_vencimiento: '2026-02-20',
      estado: 'Pendiente',
    },

    {
      id_factura: 3,
      codigo_factura: 'FAC-0003',
      codigo_servicio: 'A-015',
      nombre_cliente: 'Jessica Avila',
      periodo: 'Marzo 2026',
      monto_total: 210,
      fecha_vencimiento: '2026-03-05',
      estado: 'Pendiente',
    },
  ];

  cuotas: any[] = [
    {
      id_factura: 3,
      numero_cuota: 1,
      monto: 70,
      estado: 'Pendiente',
    },

    {
      id_factura: 3,
      numero_cuota: 2,
      monto: 70,
      estado: 'Pendiente',
    },

    {
      id_factura: 3,
      numero_cuota: 3,
      monto: 70,
      estado: 'Pendiente',
    },
  ];

  facturasCliente: any[] = [];

  facturaSeleccionada: any = null;

  pagos: Pago[] = [];

  contadorPagos = 1;

  acuerdosGenerados: number[] = [3];

  buscarCliente() {
    this.facturasCliente = this.facturas.filter(
      (f) =>
        f.nombre_cliente.toLowerCase().includes(this.busqueda.toLowerCase()) ||
        f.codigo_servicio.toLowerCase().includes(this.busqueda.toLowerCase()),
    );
  }

  seleccionarFactura(f: any) {
    this.facturaSeleccionada = f;

    this.cuotasFactura = [];

    if (this.acuerdosGenerados.includes(f.id_factura)) {
      this.cuotasFactura = this.cuotas.filter(
        (c) => c.id_factura === f.id_factura,
      );
    }
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

    // CERRAR VISTA
    this.facturaSeleccionada = null;
    this.cuotasFactura = [];
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

      setTimeout(() => {
        ventana.print();

        ventana.close();

        // LIMPIAR RECIBO DE LA PANTALLA
        this.pagos = [];

        // LIMPIAR FACTURA ACTIVA
        this.facturaSeleccionada = null;
        this.cuotasFactura = [];
      }, 500);
    }
  }

  esVencida(f: any) {
    const hoy = new Date();
    const vencimiento = new Date(f.fecha_vencimiento);

    return f.estado === 'Pendiente' && vencimiento < hoy;
  }

  pagarCuota(c: any) {
    const cuota = this.cuotasFactura.find(
      (q) => q.numero_cuota === c.numero_cuota,
    );

    if (cuota) {
      cuota.estado = 'Pagada';
    }

    alert('Cuota pagada');

    // VALIDAR SI TODAS LAS CUOTAS ESTAN PAGADAS

    const todasPagadas = this.cuotasFactura.every((q) => q.estado === 'Pagada');

    if (todasPagadas) {
      if (this.facturaSeleccionada) {
        this.facturaSeleccionada.estado = 'Pagada';
      }

      alert('Factura pagada completamente');
    }
  }

  getCuotasPagadas() {
    return this.cuotasFactura.filter((c) => c.estado === 'Pagada').length;
  }
}
