import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import Chart from 'chart.js/auto';

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
export class ServiciosSuspendidosComponent implements AfterViewInit {
  @ViewChild('grafico') grafico!: ElementRef;

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

    {
      codigo_cliente: 'A004',
      cliente: 'Ana Torres',
      direccion: 'Barrio Abajo',
      fecha_suspension: '2024-03-20',
      motivo: 'Avería',
      estado: 'Suspendido',
    },
  ];

  ngAfterViewInit() {
    this.generarGrafico();
  }

  generarGrafico() {
    const conteo: any = {};

    this.servicios.forEach((s) => {
      conteo[s.motivo] = (conteo[s.motivo] || 0) + 1;
    });

    const etiquetas = Object.keys(conteo);
    const datos = Object.values(conteo);

    new Chart(this.grafico.nativeElement, {
      type: 'bar',

      data: {
        labels: etiquetas,

        datasets: [
          {
            label: 'Suspensiones por motivo',

            data: datos,

            backgroundColor: ['#ef4444', '#f59e0b', '#3b82f6', '#10b981'],
          },
        ],
      },

      options: {
        responsive: true,

        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
