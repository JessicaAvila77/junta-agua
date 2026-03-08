import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import Chart from 'chart.js/auto';

interface Acuerdo {
  cliente: string;
  factura: string;
  cuotas: number;
  pagadas: number;
  estado: string;
}

@Component({
  selector: 'app-acuerdos-pago',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './acuerdos-pago.component.html',
  styleUrls: ['./acuerdos-pago.component.css'],
})
export class AcuerdosPagoComponent implements AfterViewInit {
  @ViewChild('grafico') grafico!: ElementRef;

  acuerdos: Acuerdo[] = [
    {
      cliente: 'Juan Pérez',
      factura: '2024-01',
      cuotas: 3,
      pagadas: 1,
      estado: 'Activo',
    },

    {
      cliente: 'María López',
      factura: '2024-02',
      cuotas: 4,
      pagadas: 4,
      estado: 'Finalizado',
    },

    {
      cliente: 'Carlos Gómez',
      factura: '2024-03',
      cuotas: 2,
      pagadas: 1,
      estado: 'Activo',
    },
  ];

  ngAfterViewInit() {
    this.generarGrafico();
  }

  generarGrafico() {
    const conteo: any = {};

    this.acuerdos.forEach((a) => {
      conteo[a.estado] = (conteo[a.estado] || 0) + 1;
    });

    const etiquetas = Object.keys(conteo);
    const datos = Object.values(conteo);

    new Chart(this.grafico.nativeElement, {
      type: 'pie',

      data: {
        labels: etiquetas,

        datasets: [
          {
            data: datos,

            backgroundColor: ['#f59e0b', '#10b981'],
          },
        ],
      },

      options: {
        responsive: true,
      },
    });
  }
}
