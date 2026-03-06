import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

import { Lectura } from '../../models/lectura.model';
import { Medidor } from '../../models/medidor.model';

@Component({
  selector: 'app-lecturas',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './lecturas.component.html',
  styleUrl: './lecturas.component.css'
})
export class LecturasComponent {

  numeroSerieBusqueda = '';
  busquedaLectura = '';

  medidorEncontrado: Medidor | null = null;

  fechaLectura = '';
  lecturaActual:number = 0;

  lecturaAnterior:number = 0;
  consumo:number = 0;

  lecturas:Lectura[] = [];

  contadorLecturas:number = 1;

  editando:boolean = false;
  idEditando:number = -1;


  /* MEDIDORES SIMULADOS */

  medidores:Medidor[] = [

    {
      id_medidor:1,
      id_servicio:1,
      numero_serie:'MED-001',
      fecha_instalacion:'2024-01-01',
      fecha_retiro:'',
      estado:'Activo'
    },

    {
      id_medidor:2,
      id_servicio:2,
      numero_serie:'MED-002',
      fecha_instalacion:'2024-02-01',
      fecha_retiro:'',
      estado:'Activo'
    }

  ];


buscarMedidor(){

  this.medidorEncontrado = this.medidores.find(
    m => m.numero_serie === this.numeroSerieBusqueda
  ) || null;

  if(this.medidorEncontrado){

    const ultimaLectura = this.lecturas
      .filter(l => l.id_medidor === this.medidorEncontrado!.id_medidor)
      .pop();

    this.lecturaAnterior = ultimaLectura
      ? ultimaLectura.lectura_actual
      : 0;

  }

}


calcularConsumo(){

  if(this.lecturaActual < this.lecturaAnterior){

    alert('La lectura actual no puede ser menor que la anterior');
    this.lecturaActual = 0;
    return;

  }

  this.consumo = this.lecturaActual - this.lecturaAnterior;

}


guardarLectura(){

  if(!this.medidorEncontrado){
    alert('Debe buscar un medidor');
    return;
  }

  const nuevaLectura:Lectura = {

    id_lectura: this.editando
      ? this.idEditando
      : this.contadorLecturas,

    id_medidor:this.medidorEncontrado.id_medidor,

    fecha_lectura:this.fechaLectura,

    lectura_actual:this.lecturaActual,

    consumo:this.consumo

  };

  if(this.editando){

    const index = this.lecturas.findIndex(
      l => l.id_lectura === this.idEditando
    );

    if(index !== -1){
      this.lecturas[index] = nuevaLectura;
    }

    this.editando=false;
    this.idEditando=-1;

  }else{

    this.lecturas.push(nuevaLectura);
    this.contadorLecturas++;

  }

  this.limpiarFormulario();

}


editarLectura(lectura:Lectura){

  const medidor = this.medidores.find(
    m => m.id_medidor === lectura.id_medidor
  );

  this.medidorEncontrado = medidor || null;
  this.numeroSerieBusqueda = medidor?.numero_serie || '';

  this.fechaLectura = lectura.fecha_lectura;
  this.lecturaActual = lectura.lectura_actual;

  this.lecturaAnterior = lectura.lectura_actual - lectura.consumo;

  this.consumo = lectura.consumo;

  this.idEditando = lectura.id_lectura;

  this.editando = true;

}


eliminarLectura(index:number){

  this.lecturas.splice(index,1);

}


limpiarFormulario(){

  this.numeroSerieBusqueda='';
  this.medidorEncontrado=null;

  this.fechaLectura='';
  this.lecturaActual=0;

  this.lecturaAnterior=0;
  this.consumo=0;

}


lecturasFiltradas(){

  if(!this.busquedaLectura){
    return this.lecturas;
  }

  const texto = this.busquedaLectura.toLowerCase();

  return this.lecturas.filter(l =>

    l.id_medidor.toString().includes(texto)

  );

}

}