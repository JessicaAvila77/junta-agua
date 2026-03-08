import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import Chart from 'chart.js/auto';

interface Ingreso {
  recibo: string;
  cliente: string;
  tipo_pago: string;
  referencia: string;
  monto: number;
  fecha: string;
}

@Component({
  selector: 'app-ingresos-dia',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './ingresos-dia.component.html',
  styleUrls: ['./ingresos-dia.component.css'],
})
export class IngresosDiaComponent implements AfterViewInit {
  @ViewChild('grafico') grafico!: ElementRef;

  ingresos: Ingreso[] = [
    {
      recibo: '0001',
      cliente: 'Juan Pérez',
      tipo_pago: 'Factura',
      referencia: 'Periodo 2024-01',
      monto: 250,
      fecha: '2024-03-20',
    },

    {
      recibo: '0002',
      cliente: 'María López',
      tipo_pago: 'Factura',
      referencia: 'Periodo 2024-02',
      monto: 300,
      fecha: '2024-03-20',
    },

    {
      recibo: '0003',
      cliente: 'Carlos Gómez',
      tipo_pago: 'Acuerdo',
      referencia: 'Cuota 1',
      monto: 150,
      fecha: '2024-03-20',
    },
  ];

  ngAfterViewInit() {
    this.generarGrafico();
  }

  calcularTotal() {
    return this.ingresos.reduce((suma, i) => suma + i.monto, 0);
  }

  generarGrafico() {
    const conteo: any = {};

    this.ingresos.forEach((i) => {
      conteo[i.tipo_pago] = (conteo[i.tipo_pago] || 0) + 1;
    });

    const etiquetas = Object.keys(conteo);
    const datos = Object.values(conteo);

    new Chart(this.grafico.nativeElement, {
      type: 'bar',

      data: {
        labels: etiquetas,

        datasets: [
          {
            label: 'Ingresos por tipo de pago',

            data: datos,

            backgroundColor: ['#3b82f6', '#10b981'],
          },
        ],
      },

      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
      },
    });
  }
}
