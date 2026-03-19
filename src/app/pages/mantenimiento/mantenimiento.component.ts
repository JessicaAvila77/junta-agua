import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

import { Mantenimiento } from '../../models/mantenimiento.model';
import { Activo } from '../../models/activo.model';

@Component({
  selector: 'app-mantenimiento',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './mantenimiento.component.html',
  styleUrl: './mantenimiento.component.css'
})
export class MantenimientoComponent {

  // FORMULARIO
  idActivoSeleccionado: number = 0;
  tipoMantenimiento: string = '';
  descripcion: string = '';
  fechaProgramada: string = '';
  fechaEjecucion: string = '';
  estado: string = 'Pendiente';

  empleadosSeleccionados: string[] = [];

  // DATA
  mantenimientos: Mantenimiento[] = [];
  contador: number = 1;

  editando: boolean = false;
  idEditando: number = -1;

  // ACTIVOS SIMULADOS
  activos: Activo[] = [
    { id_activo: 1, id_tipo_activo: 1, nombre: 'Bomba 1', ubicacion: 'Pozo', fecha_instalacion: '', estado: 'Activo' },
    { id_activo: 2, id_tipo_activo: 2, nombre: 'Tanque 1', ubicacion: 'Centro', fecha_instalacion: '', estado: 'Activo' }
  ];

  // EMPLEADOS (SIN MODELO)
  empleadosDisponibles: string[] = [
    'Juan',
    'María',
    'Pedro'
  ];

  guardarMantenimiento() {

    if (this.idActivoSeleccionado === 0 || this.tipoMantenimiento === '') {
      alert('Complete los campos obligatorios');
      return;
    }

    const nuevo: Mantenimiento = {
      id_mantenimiento: this.editando ? this.idEditando : this.contador,

      id_activo: this.idActivoSeleccionado,
      tipo_mantenimiento: this.tipoMantenimiento,
      descripcion: this.descripcion,
      fecha_programada: this.fechaProgramada,
      fecha_ejecucion: this.fechaEjecucion,
      estado: this.estado,

      empleados: [...this.empleadosSeleccionados]
    };

    if (this.editando) {

      const index = this.mantenimientos.findIndex(
        m => m.id_mantenimiento === this.idEditando
      );

      if (index !== -1) {
        this.mantenimientos[index] = nuevo;
      }

      this.editando = false;
      this.idEditando = -1;

    } else {

      this.mantenimientos.push(nuevo);
      this.contador++;

    }

    this.limpiar();
  }

  toggleEmpleado(nombre: string) {

    const index = this.empleadosSeleccionados.indexOf(nombre);

    if (index === -1) {
      this.empleadosSeleccionados.push(nombre);
    } else {
      this.empleadosSeleccionados.splice(index, 1);
    }
  }

  editar(m: Mantenimiento) {

    this.idActivoSeleccionado = m.id_activo;
    this.tipoMantenimiento = m.tipo_mantenimiento;
    this.descripcion = m.descripcion;
    this.fechaProgramada = m.fecha_programada;
    this.fechaEjecucion = m.fecha_ejecucion;
    this.estado = m.estado;

    this.empleadosSeleccionados = [...m.empleados];

    this.idEditando = m.id_mantenimiento;
    this.editando = true;
  }

  eliminar(index: number) {
    this.mantenimientos.splice(index, 1);
  }

  limpiar() {

    this.idActivoSeleccionado = 0;
    this.tipoMantenimiento = '';
    this.descripcion = '';
    this.fechaProgramada = '';
    this.fechaEjecucion = '';
    this.estado = 'Pendiente';
    this.empleadosSeleccionados = [];

    this.editando = false;
    this.idEditando = -1;
  }

  obtenerNombreActivo(id: number): string {
    const activo = this.activos.find(a => a.id_activo === id);
    return activo ? activo.nombre : 'N/A';
  }

}