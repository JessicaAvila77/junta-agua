import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

import { Activo } from '../../models/activo.model';

@Component({
  selector: 'app-activos',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './activos.component.html',
  styleUrl: './activos.component.css'
})
export class ActivosComponent {

  busquedaActivo: string = '';

  nombre = '';
  ubicacion = '';
  fechaInstalacion = '';
  estado = 'Activo';
  tipoActivoSeleccionado: number = 0;

  activos: Activo[] = [];
  contadorActivos: number = 1;

  editando: boolean = false;
  idEditando: number = -1;

  tiposActivos = [
    { id_tipo_activo: 1, nombre: 'Bomba' },
    { id_tipo_activo: 2, nombre: 'Tanque' },
    { id_tipo_activo: 3, nombre: 'Tubería' }
  ];

  guardarActivo() {

    if (!this.nombre || this.tipoActivoSeleccionado === 0) {
      alert('Complete los campos');
      return;
    }

    console.log('Tipo seleccionado:', this.tipoActivoSeleccionado);

    const nuevoActivo: Activo = {

      id_activo: this.editando
        ? this.idEditando
        : this.contadorActivos,

      id_tipo_activo: this.tipoActivoSeleccionado,

      nombre: this.nombre,
      ubicacion: this.ubicacion,
      fecha_instalacion: this.fechaInstalacion,
      estado: this.estado

    };

    if (this.editando) {

      const index = this.activos.findIndex(
        a => a.id_activo === this.idEditando
      );

      if (index !== -1) {
        this.activos[index] = nuevoActivo;
      }

      this.editando = false;
      this.idEditando = -1;

    } else {

      this.activos.push(nuevoActivo);
      this.contadorActivos++;

    }

    this.limpiarFormulario();
  }

  editarActivo(activo: Activo) {

    this.nombre = activo.nombre;
    this.ubicacion = activo.ubicacion;
    this.fechaInstalacion = activo.fecha_instalacion;
    this.estado = activo.estado;
    this.tipoActivoSeleccionado = activo.id_tipo_activo;

    this.idEditando = activo.id_activo;
    this.editando = true;
  }

  eliminarActivo(index: number) {
    this.activos.splice(index, 1);
  }

  limpiarFormulario() {

    this.nombre = '';
    this.ubicacion = '';
    this.fechaInstalacion = '';
    this.estado = 'Activo';
    this.tipoActivoSeleccionado = 0;

    this.editando = false;
    this.idEditando = -1;
  }

  activosFiltrados() {

    if (!this.busquedaActivo) {
      return this.activos;
    }

    const texto = this.busquedaActivo.toLowerCase();

    return this.activos.filter(activo =>
      activo.nombre.toLowerCase().includes(texto)
    );
  }

  // 🔥 MÉTODO PARA MOSTRAR EL NOMBRE DEL TIPO
  obtenerNombreTipo(id: number): string {
    const tipo = this.tiposActivos.find(t => t.id_tipo_activo === id);
    return tipo ? tipo.nombre : 'N/A';
  }

}