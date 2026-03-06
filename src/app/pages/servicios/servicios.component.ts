import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

import { Servicio } from '../../models/servicio.model';
import { Miembro } from '../../models/miembro.model';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

  identidadBusqueda = '';
  busquedaServicio:string = '';
  codigoClienteActual:string = '';

  miembroEncontrado: Miembro | null = null;

  direccionServicio = '';
  tipoServicio = 'Domestico';
  estadoServicio = 'Activo';

  servicios: Servicio[] = [];

  contadorServicios:number = 1;

  editando:boolean = false;
  indexEditando:number = -1;


  /* MIEMBROS SIMULADOS */

  miembros: Miembro[] = [

  {
    id_miembro:1,
    identidad:'0607197700818',
    nombre:'Juan Pérez',
    telefono:'99998888',
    direccion:'Barrio Centro',
    fecha_ingreso:'2024-01-10',
    estado:'Activo'
  },

  {
    id_miembro:2,
    identidad:'0801199012345',
    nombre:'Ana López',
    telefono:'98887777',
    direccion:'Colonia Progreso',
    fecha_ingreso:'2024-02-15',
    estado:'Activo'
  }

];


  buscarMiembro(){

    this.miembroEncontrado = this.miembros.find(
      m => m.identidad === this.identidadBusqueda
    ) || null;

  }


  guardarServicio(){

    if(!this.miembroEncontrado){
      alert('Debe buscar un miembro primero');
      return;
    }

    const codigoCliente = this.editando
      ? this.codigoClienteActual
      : 'CLI-' + this.contadorServicios.toString().padStart(3,'0');

    const nuevoServicio: Servicio = {

      id_servicio: this.editando
        ? this.servicios[this.indexEditando].id_servicio
        : this.contadorServicios,

      id_miembro: this.miembroEncontrado.id_miembro,

      codigo_cliente: codigoCliente,

      direccion_servicio: this.direccionServicio,

      tipo_servicio: this.tipoServicio,

      estado: this.estadoServicio

    };

    if(this.editando){

      this.servicios[this.indexEditando] = nuevoServicio;

      this.editando = false;
      this.indexEditando = -1;

    }else{

      this.servicios.push(nuevoServicio);
      this.contadorServicios++;

    }

    this.limpiarFormulario();

  }


  editarServicio(servicio:Servicio,index:number){

    const miembro = this.miembros.find(
      m => m.id_miembro === servicio.id_miembro
    );

    if(miembro){
      this.miembroEncontrado = miembro;
      this.identidadBusqueda = miembro.identidad;
    }

    this.codigoClienteActual = servicio.codigo_cliente;

    this.direccionServicio = servicio.direccion_servicio;
    this.tipoServicio = servicio.tipo_servicio;
    this.estadoServicio = servicio.estado;

    this.editando = true;
    this.indexEditando = index;

  }


  eliminarServicio(index:number){

    this.servicios.splice(index,1);

  }


  limpiarFormulario(){

    this.direccionServicio = '';
    this.tipoServicio = 'Domestico';
    this.estadoServicio = 'Activo';

    this.identidadBusqueda = '';
    this.miembroEncontrado = null;

  }


  obtenerMiembro(id:number){

    return this.miembros.find(m => m.id_miembro === id);

  }


  serviciosFiltrados(){

    if(!this.busquedaServicio){
      return this.servicios;
    }

    const texto = this.busquedaServicio.toLowerCase();

    return this.servicios.filter(servicio => {

      const miembro = this.obtenerMiembro(servicio.id_miembro);

      return (
        servicio.codigo_cliente.toLowerCase().includes(texto) ||
        servicio.direccion_servicio.toLowerCase().includes(texto) ||
        servicio.tipo_servicio.toLowerCase().includes(texto) ||
        miembro?.nombre.toLowerCase().includes(texto)
      );

    });

  }

}