import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-miembros',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './miembros.component.html',
  styleUrl: './miembros.component.css'
})
export class MiembrosComponent {

  nombre = '';
  apellido = '';
  identidad = '';
  telefono = '';
  direccion = '';
  fechaIngreso = '';
  estado = 'Activo';

  miembros: any[] = [];

  contadorMiembros:number = 1;

  editando:boolean=false;
  indexEditando:number=-1;

  guardarMiembro(){

    const nuevoMiembro = {
      codigo:'MBR-'+this.contadorMiembros.toString().padStart(3,'0'),
      nombre:this.nombre,
      apellido:this.apellido,
      identidad:this.identidad,
      telefono:this.telefono,
      direccion:this.direccion,
      fechaIngreso:this.fechaIngreso,
      estado:this.estado
    };

    if(this.editando){

      this.miembros[this.indexEditando] = nuevoMiembro;

      this.editando=false;
      this.indexEditando=-1;

    }else{

      this.miembros.push(nuevoMiembro);
      this.contadorMiembros++;

    }

    this.limpiarFormulario();

  }

  editarMiembro(miembro:any,index:number){

    this.nombre = miembro.nombre;
    this.apellido = miembro.apellido;
    this.identidad = miembro.identidad;
    this.telefono = miembro.telefono;
    this.direccion = miembro.direccion;
    this.fechaIngreso = miembro.fechaIngreso;
    this.estado = miembro.estado;

    this.editando=true;
    this.indexEditando=index;

  }

  eliminarMiembro(index:number){
    this.miembros.splice(index,1);
  }

  limpiarFormulario(){

    this.nombre='';
    this.apellido='';
    this.identidad='';
    this.telefono='';
    this.direccion='';
    this.fechaIngreso='';
    this.estado='Activo';

  }

}