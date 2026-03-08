import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';

interface FacturaVencida {
  codigo_cliente: string;
  cliente: string;
  periodo: string;
  fecha_vencimiento: string;
  monto: number;
  dias_mora: number;
}

@Component({
  selector: 'app-facturas-vencidas',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './facturas-vencidas.component.html',
  styleUrls: ['./facturas-vencidas.component.css'],
})
export class FacturasVencidasComponent {
  facturas: FacturaVencida[] = [
    {
      codigo_cliente: 'A001',
      cliente: 'Juan Pérez',
      periodo: '2024-01',
      fecha_vencimiento: '2024-02-10',
      monto: 250,
      dias_mora: 30,
    },

    {
      codigo_cliente: 'A002',
      cliente: 'María López',
      periodo: '2024-02',
      fecha_vencimiento: '2024-03-10',
      monto: 300,
      dias_mora: 20,
    },

    {
      codigo_cliente: 'A003',
      cliente: 'Carlos Gómez',
      periodo: '2024-02',
      fecha_vencimiento: '2024-03-05',
      monto: 275,
      dias_mora: 25,
    },
  ];

  calcularTotal() {
    return this.facturas.reduce((suma, f) => suma + f.monto, 0);
  }
}
