import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CajaDia } from '../../models/caja-dia.model';

@Component({
  selector: 'app-caja-dia',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './caja-dia.component.html',
  styleUrls: ['./caja-dia.component.css'],
})
export class CajaDiaComponent {
  fechaHoy = new Date().toLocaleDateString();

  pagos: CajaDia[] = [
    {
      numero_recibo: 'REC-0001',
      nombre_cliente: 'Jessica Avila',
      codigo_servicio: 'A-001',
      monto_pagado: 170,
      fecha_pago: this.fechaHoy,
    },

    {
      numero_recibo: 'REC-0002',
      nombre_cliente: 'Jessica Avila',
      codigo_servicio: 'A-015',
      monto_pagado: 160,
      fecha_pago: this.fechaHoy,
    },
  ];

  get totalRecaudado() {
    return this.pagos.reduce((total, p) => total + p.monto_pagado, 0);
  }

  imprimir() {
    const contenido = document.getElementById('reporteCaja')?.innerHTML;

    const ventana = window.open('', '', 'width=800,height=600');

    if (ventana) {
      ventana.document.write(`
<html>
<head>
<title>Caja del día</title>

<style>

body{
font-family: Arial, sans-serif;
padding:40px;
}

h3{
margin-top:20px;
}

table{
width:100%;
border-collapse:collapse;
margin-top:15px;
}

th,td{
border:1px solid #ddd;
padding:10px;
text-align:left;
}

th{
background:#f5f5f5;
}

</style>

</head>

<body>

<h2>JUNTA ADMINISTRADORA DE AGUA</h2>
<h3>Reporte Caja del Día</h3>

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
}
