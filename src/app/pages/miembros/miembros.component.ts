import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

import { Miembro } from '../../models/miembro.model';

@Component({
  selector: 'app-miembros',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './miembros.component.html',
  styleUrl: './miembros.component.css',
})
export class MiembrosComponent {
  nombre = '';
  identidad = '';
  telefono = '';
  direccion = '';
  fechaIngreso = '';
  estado = 'Activo';

  busquedaMiembro: string = '';

  miembros: Miembro[] = [
    {
      id_miembro: 1,
      identidad: '0607197700818',
      nombre: 'Juan Pérez',
      telefono: '99998888',
      direccion: 'Barrio Centro',
      fecha_ingreso: '2024-01-10',
      estado: 'Activo',
    },

    {
      id_miembro: 2,
      identidad: '0801199012345',
      nombre: 'Ana López',
      telefono: '98887777',
      direccion: 'Colonia Progreso',
      fecha_ingreso: '2024-02-15',
      estado: 'Activo',
    },
  ];

  contadorMiembros: number = 3;

  editando: boolean = false;
  indexEditando: number = -1;

 guardarMiembro(){

  const nuevoMiembro: Miembro = {

    id_miembro: this.editando
      ? this.indexEditando
      : this.contadorMiembros,

    identidad: this.identidad,
    nombre: this.nombre,
    telefono: this.telefono,
    direccion: this.direccion,
    fecha_ingreso: this.fechaIngreso,
    estado: this.estado

  };

  if(this.editando){

    const index = this.miembros.findIndex(
      m => m.id_miembro === this.indexEditando
    );

    if(index !== -1){
      this.miembros[index] = nuevoMiembro;
    }

    this.editando = false;
    this.indexEditando = -1;

  }else{

    this.miembros.push(nuevoMiembro);
    this.contadorMiembros++;

  }

  this.limpiarFormulario();

}

 editarMiembro(miembro:Miembro){

  this.nombre = miembro.nombre;
  this.identidad = miembro.identidad;
  this.telefono = miembro.telefono;
  this.direccion = miembro.direccion;
  this.fechaIngreso = miembro.fecha_ingreso;
  this.estado = miembro.estado;

  this.indexEditando = miembro.id_miembro;

  this.editando = true;

}

  eliminarMiembro(index: number) {
    this.miembros.splice(index, 1);
  }

  limpiarFormulario() {
    this.nombre = '';
    this.identidad = '';
    this.telefono = '';
    this.direccion = '';
    this.fechaIngreso = '';
    this.estado = 'Activo';

    this.editando = false;
    this.indexEditando = -1;
  }

  miembrosFiltrados(): Miembro[] {
    if (!this.busquedaMiembro) {
      return this.miembros;
    }

    const texto = this.busquedaMiembro.toLowerCase();

    return this.miembros.filter(
      (miembro) =>
        miembro.identidad === this.busquedaMiembro ||
        miembro.nombre.toLowerCase().includes(texto) ||
        miembro.telefono.toLowerCase().includes(texto) ||
        miembro.direccion.toLowerCase().includes(texto),
    );
  }
}
