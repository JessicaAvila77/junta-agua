import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-constancias',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './constancias.component.html',
  styleUrl: './constancias.component.css',
})
export class ConstanciasComponent {
  miembroSeleccionado: any = null;
  tipoConstancia = '';

  constancias: any[] = [];
  constanciaGenerada: any = null;

  contadorConstancias = 1;

  miembros = [
    { nombre: 'Juan Pérez', identidad: '080119990001' },
    { nombre: 'María López', identidad: '080119990002' },
    { nombre: 'Carlos Mejía', identidad: '080119990003' },
  ];

  generarConstancia() {
    if (!this.miembroSeleccionado || !this.tipoConstancia) {
      alert('Seleccione miembro y tipo de constancia');
      return;
    }

    const codigo =
      'CONST-' + this.contadorConstancias.toString().padStart(3, '0');

    const nuevaConstancia = {
      codigo: codigo,
      miembro: this.miembroSeleccionado.nombre,
      identidad: this.miembroSeleccionado.identidad,
      tipo: this.tipoConstancia,
      fecha: new Date().toLocaleDateString(),
      lugar: 'Orocuina, Choluteca',
      estado: 'Emitida',
    };

    this.constancias.push(nuevaConstancia);

    this.constanciaGenerada = nuevaConstancia;

    this.contadorConstancias++;

    this.miembroSeleccionado = null;
    this.tipoConstancia = '';
  }

  eliminarConstancia(index: number) {
    this.constancias.splice(index, 1);
  }

  imprimirConstancia(constancia: any) {
    this.constanciaGenerada = constancia;

    setTimeout(() => {
      window.print();

      this.constanciaGenerada = null;
    }, 200);
  }

  imprimir() {
    window.print();

    setTimeout(() => {
      this.constanciaGenerada = null;
    }, 500);
  }
}
