import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';

interface Proyecto {
  id_proyecto: number;
  nombre_proyecto: string;
  tipo_proyecto: string;
  descripcion: string;
  justificacion: string;

  benef_hombres: number;
  benef_mujeres: number;
  benef_ninos: number;
  benef_familias: number;

  fecha_inicio: string;
  fecha_fin: string;

  estado: string;
}

@Component({
  selector: 'app-perfil-proyecto',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './perfil-proyecto.component.html',
  styleUrls: ['./perfil-proyecto.component.css'],
})
export class PerfilProyectoComponent {
  proyectos: Proyecto[] = [];

  nuevoProyecto: Proyecto = {
    id_proyecto: 0,
    nombre_proyecto: '',
    tipo_proyecto: '',
    descripcion: '',
    justificacion: '',

    benef_hombres: 0,
    benef_mujeres: 0,
    benef_ninos: 0,
    benef_familias: 0,

    fecha_inicio: '',
    fecha_fin: '',

    estado: 'Activo',
  };

  guardarProyecto() {
    if (this.nuevoProyecto.id_proyecto === 0) {
      this.nuevoProyecto.id_proyecto = this.proyectos.length + 1;
      this.proyectos.push({ ...this.nuevoProyecto });
    } else {
      const index = this.proyectos.findIndex(
        (p) => p.id_proyecto === this.nuevoProyecto.id_proyecto,
      );
      this.proyectos[index] = { ...this.nuevoProyecto };
    }

    this.limpiarFormulario();
  }

  editarProyecto(p: Proyecto) {
    this.nuevoProyecto = { ...p };
  }

  eliminarProyecto(id: number) {
    this.proyectos = this.proyectos.filter((p) => p.id_proyecto !== id);
  }

  limpiarFormulario() {
    this.nuevoProyecto = {
      id_proyecto: 0,
      nombre_proyecto: '',
      tipo_proyecto: '',
      descripcion: '',
      justificacion: '',

      benef_hombres: 0,
      benef_mujeres: 0,
      benef_ninos: 0,
      benef_familias: 0,

      fecha_inicio: '',
      fecha_fin: '',

      estado: 'Activo',
    };
  }
}
