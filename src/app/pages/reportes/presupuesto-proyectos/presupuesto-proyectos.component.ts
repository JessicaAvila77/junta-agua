import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms'
import Chart from 'chart.js/auto';

interface Proyecto {
  id_proyecto: number;
  nombre_proyecto: string;
}

interface Presupuesto {
  anio: number;
  fecha_aprobacion: string;
  estado: string;
}

interface Detalle {
  descripcion: string;
  cantidad: number;
  precio: number;
  total: number;
}

@Component({
  selector: 'app-presupuesto-proyectos',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './presupuesto-proyectos.component.html',
  styleUrls: ['./presupuesto-proyectos.component.css'],
})
export class PresupuestoProyectosComponent implements AfterViewInit {
  @ViewChild('grafico') grafico!: ElementRef;

  proyectos: Proyecto[] = [
    { id_proyecto: 1, nombre_proyecto: 'Ampliación sistema de agua' },
    { id_proyecto: 2, nombre_proyecto: 'Construcción tanque almacenamiento' },
  ];

  proyectoSeleccionado: number = 1;

  presupuesto: Presupuesto = {
    anio: 2025,
    fecha_aprobacion: '2025-02-10',
    estado: 'Aprobado',
  };

  detalles: Detalle[] = [
    {
      descripcion: 'Tubería PVC',
      cantidad: 200,
      precio: 45,
      total: 9000,
    },

    {
      descripcion: 'Excavación',
      cantidad: 100,
      precio: 60,
      total: 6000,
    },

    {
      descripcion: 'Material de construcción',
      cantidad: 50,
      precio: 80,
      total: 4000,
    },
  ];

  ngAfterViewInit() {
    this.generarGrafico();
  }

  calcularTotal() {
    return this.detalles.reduce((suma, d) => suma + d.total, 0);
  }

  generarGrafico() {
    const etiquetas = this.detalles.map((d) => d.descripcion);
    const datos = this.detalles.map((d) => d.total);

    new Chart(this.grafico.nativeElement, {
      type: 'pie',

      data: {
        labels: etiquetas,

        datasets: [
          {
            data: datos,

            backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
          },
        ],
      },

      options: {
        responsive: true,
      },
    });
  }
}
