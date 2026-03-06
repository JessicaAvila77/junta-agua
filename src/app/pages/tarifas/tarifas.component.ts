import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

import { Tarifa } from '../../models/tarifa.model';

@Component({
  selector: 'app-tarifas',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './tarifas.component.html',
  styleUrl: './tarifas.component.css',
})
export class TarifasComponent {
  tipoServicio = 'Domestico';
  montoBase: number = 0;
  precioM3: number = 0;
  fechaVigencia = '';
  estado = 'Activa';

  busquedaTarifa: string = '';

  tarifas: Tarifa[] = [];

  contadorTarifas: number = 1;

  editando: boolean = false;
  idEditando: number = -1;

  guardarTarifa() {
    const nuevaTarifa: Tarifa = {
      id_tarifa: this.editando ? this.idEditando : this.contadorTarifas,

      tipo_servicio: this.tipoServicio,

      monto_base: this.montoBase,

      precio_por_m3: this.precioM3,

      fecha_vigencia: this.fechaVigencia,

      estado: this.estado,
    };

    if (this.editando) {
      const index = this.tarifas.findIndex(
        (t) => t.id_tarifa === this.idEditando,
      );

      if (index !== -1) {
        this.tarifas[index] = nuevaTarifa;
      }

      this.editando = false;
      this.idEditando = -1;
    } else {
      this.tarifas.push(nuevaTarifa);
      this.contadorTarifas++;
    }

    this.limpiarFormulario();
  }

  editarTarifa(tarifa: Tarifa) {
    this.tipoServicio = tarifa.tipo_servicio;
    this.montoBase = tarifa.monto_base;
    this.precioM3 = tarifa.precio_por_m3;
    this.fechaVigencia = tarifa.fecha_vigencia;
    this.estado = tarifa.estado;

    this.idEditando = tarifa.id_tarifa;

    this.editando = true;
  }

  eliminarTarifa(index: number) {
    this.tarifas.splice(index, 1);
  }

  limpiarFormulario() {
    this.tipoServicio = 'Domestico';
    this.montoBase = 0;
    this.precioM3 = 0;
    this.fechaVigencia = '';
    this.estado = 'Activa';
  }

  tarifasFiltradas() {
    if (!this.busquedaTarifa) {
      return this.tarifas;
    }

    const texto = this.busquedaTarifa.toLowerCase();

    return this.tarifas.filter((t) =>
      t.tipo_servicio.toLowerCase().includes(texto),
    );
  }
}
