import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';

interface Cooperante {
  id_cooperante: number;
  nombre: string;
  tipo_cooperante: string;
  telefono: string;
  direccion: string;
  correo: string;
  estado: string;
}

@Component({
  selector: 'app-cooperantes',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './cooperantes.component.html',
  styleUrls: ['./cooperantes.component.css'],
})
export class CooperantesComponent {
  cooperantes: Cooperante[] = [];

  nuevoCooperante: Cooperante = {
    id_cooperante: 0,
    nombre: '',
    tipo_cooperante: '',
    telefono: '',
    direccion: '',
    correo: '',
    estado: 'Activo',
  };

  guardarCooperante() {
    if (this.nuevoCooperante.id_cooperante === 0) {
      this.nuevoCooperante.id_cooperante = this.cooperantes.length + 1;
      this.cooperantes.push({ ...this.nuevoCooperante });
    } else {
      const index = this.cooperantes.findIndex(
        (c) => c.id_cooperante === this.nuevoCooperante.id_cooperante,
      );
      this.cooperantes[index] = { ...this.nuevoCooperante };
    }

    this.limpiarFormulario();
  }

  editarCooperante(c: Cooperante) {
    this.nuevoCooperante = { ...c };
  }

  eliminarCooperante(id: number) {
    this.cooperantes = this.cooperantes.filter((c) => c.id_cooperante !== id);
  }

  limpiarFormulario() {
    this.nuevoCooperante = {
      id_cooperante: 0,
      nombre: '',
      tipo_cooperante: '',
      telefono: '',
      direccion: '',
      correo: '',
      estado: 'Activo',
    };
  }
}
