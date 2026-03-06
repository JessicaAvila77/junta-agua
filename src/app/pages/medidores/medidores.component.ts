import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

import { Medidor } from '../../models/medidor.model';
import { Servicio } from '../../models/servicio.model';

@Component({
  selector: 'app-medidores',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './medidores.component.html',
  styleUrl: './medidores.component.css'
})
export class MedidoresComponent {

  codigoServicioBusqueda = '';
  busquedaMedidor:string = '';

  servicioEncontrado: Servicio | null = null;

  numeroSerie = '';
  fechaInstalacion = '';
  fechaRetiro = '';
  estado = 'Activo';

  medidores:Medidor[] = [];

  contadorMedidores:number = 1;

  editando:boolean=false;
  idEditando:number=-1;


  /* SERVICIOS SIMULADOS */

  servicios: Servicio[] = [

    {
      id_servicio:1,
      id_miembro:1,
      codigo_cliente:'CLI-001',
      direccion_servicio:'Barrio Centro',
      tipo_servicio:'Domestico',
      estado:'Activo'
    },

    {
      id_servicio:2,
      id_miembro:2,
      codigo_cliente:'CLI-002',
      direccion_servicio:'Colonia Progreso',
      tipo_servicio:'Domestico',
      estado:'Activo'
    }

  ];


buscarServicio(){

  this.servicioEncontrado = this.servicios.find(
    s => s.codigo_cliente === this.codigoServicioBusqueda
  ) || null;

}


guardarMedidor(){

  if(!this.servicioEncontrado){
    alert('Debe buscar un servicio');
    return;
  }

  const nuevoMedidor: Medidor = {

    id_medidor: this.editando
      ? this.idEditando
      : this.contadorMedidores,

    id_servicio: this.servicioEncontrado.id_servicio,

    numero_serie: this.numeroSerie,

    fecha_instalacion: this.fechaInstalacion,

    fecha_retiro: this.fechaRetiro,

    estado: this.estado

  };


  if(this.editando){

    const index = this.medidores.findIndex(
      m => m.id_medidor === this.idEditando
    );

    if(index !== -1){
      this.medidores[index] = nuevoMedidor;
    }

    this.editando=false;
    this.idEditando=-1;

  }else{

    this.medidores.push(nuevoMedidor);
    this.contadorMedidores++;

  }

  this.limpiarFormulario();

}


editarMedidor(medidor:Medidor){

  this.servicioEncontrado = this.servicios.find(
    s => s.id_servicio === medidor.id_servicio
  ) || null;

  this.codigoServicioBusqueda = this.servicioEncontrado?.codigo_cliente || '';

  this.numeroSerie = medidor.numero_serie;
  this.fechaInstalacion = medidor.fecha_instalacion;
  this.fechaRetiro = medidor.fecha_retiro;
  this.estado = medidor.estado;

  this.idEditando = medidor.id_medidor;

  this.editando = true;

}


eliminarMedidor(index:number){

  this.medidores.splice(index,1);

}


limpiarFormulario(){

  this.codigoServicioBusqueda='';
  this.servicioEncontrado=null;

  this.numeroSerie='';
  this.fechaInstalacion='';
  this.fechaRetiro='';
  this.estado='Activo';

}


medidoresFiltrados(){

  if(!this.busquedaMedidor){
    return this.medidores;
  }

  const texto = this.busquedaMedidor.toLowerCase();

  return this.medidores.filter(medidor => {

    const servicio = this.servicios.find(
      s => s.id_servicio === medidor.id_servicio
    );

    return (
      medidor.numero_serie.toLowerCase().includes(texto) ||
      servicio?.codigo_cliente.toLowerCase().includes(texto)
    );

  });

}

}