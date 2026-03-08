import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { Acuerdo } from '../../models/acuerdo.model';

@Component({
  selector: 'app-acuerdos',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './acuerdos.component.html',
  styleUrls: ['./acuerdos.component.css'],
})
export class AcuerdosComponent {

  acuerdos: Acuerdo[] = [

    {
      id_acuerdo:1,
      codigo_factura:'FAC-0003',
      codigo_servicio:'A-015',
      cliente:'Jessica Avila',
      cuotas:3,
      pagadas:1,
      estado:'Activo'
    },

    {
      id_acuerdo:2,
      codigo_factura:'FAC-0005',
      codigo_servicio:'A-002',
      cliente:'Juan Pérez',
      cuotas:4,
      pagadas:4,
      estado:'Finalizado'
    }

  ]

  acuerdoSeleccionado:Acuerdo | null = null


  verAcuerdo(a:Acuerdo){

    this.acuerdoSeleccionado = a

  }


  cerrarDetalle(){

    this.acuerdoSeleccionado = null

  }

}
