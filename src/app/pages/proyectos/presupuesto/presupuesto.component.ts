import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { CurrencyPipe } from '@angular/common'

interface Proyecto {
  id_proyecto: number;
  nombre_proyecto: string;
  estado: string;
}

interface Presupuesto {
  id_presupuesto: number;
  id_proyecto: number;
  anio: number;
  fecha_aprobacion: string;
  estado: string;
}

interface DetallePresupuesto {
  id: number;
  descripcion: string;
  cantidad: number;
  unidad_medida: string;
  precio_unitario: number;
  total: number;
  observacion: string;
}

@Component({
  selector: 'app-presupuesto',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, CurrencyPipe],
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css'],
})
export class PresupuestoComponent {
  /* PROYECTOS ACTIVOS (SIMULADOS) */

  proyectos: Proyecto[] = [
    {
      id_proyecto: 1,
      nombre_proyecto: 'Ampliación sistema de agua',
      estado: 'Activo',
    },
    {
      id_proyecto: 2,
      nombre_proyecto: 'Construcción tanque almacenamiento',
      estado: 'Activo',
    },
  ];

  /* PRESUPUESTO GENERAL */

  presupuesto: Presupuesto = {
    id_presupuesto: 0,
    id_proyecto: 0,
    anio: new Date().getFullYear(),
    fecha_aprobacion: '',
    estado: 'Activo',
  };

  presupuestoCreado = false;

  /* DETALLE PRESUPUESTO */

  detalles: DetallePresupuesto[] = [];

  nuevoDetalle: DetallePresupuesto = {
    id: 0,
    descripcion: '',
    cantidad: 0,
    unidad_medida: '',
    precio_unitario: 0,
    total: 0,
    observacion: '',
  };

  /* CREAR PRESUPUESTO */

  crearPresupuesto() {
    if (this.presupuesto.id_proyecto === 0) return;

    this.presupuesto.id_presupuesto = 1;
    this.presupuestoCreado = true;
  }

  /* GUARDAR DETALLE */

  guardarDetalle() {
    this.nuevoDetalle.total =
      this.nuevoDetalle.cantidad * this.nuevoDetalle.precio_unitario;

    if (this.nuevoDetalle.id === 0) {
      this.nuevoDetalle.id = this.detalles.length + 1;
      this.detalles.push({ ...this.nuevoDetalle });
    } else {
      const index = this.detalles.findIndex(
        (d) => d.id === this.nuevoDetalle.id,
      );
      this.detalles[index] = { ...this.nuevoDetalle };
    }

    this.limpiar();
  }

  /* EDITAR */

  editarDetalle(d: DetallePresupuesto) {
    this.nuevoDetalle = { ...d };
  }

  /* ELIMINAR */

  eliminarDetalle(id: number) {
    this.detalles = this.detalles.filter((d) => d.id !== id);
  }

  /* TOTAL PROYECTO */

  calcularTotalProyecto() {
    return this.detalles.reduce((suma, d) => suma + d.total, 0);
  }

  /* LIMPIAR */

  limpiar() {
    this.nuevoDetalle = {
      id: 0,
      descripcion: '',
      cantidad: 0,
      unidad_medida: '',
      precio_unitario: 0,
      total: 0,
      observacion: '',
    };
  }
}
