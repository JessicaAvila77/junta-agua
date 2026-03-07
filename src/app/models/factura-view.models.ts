export interface FacturaView {
  id_factura: number;

  codigo_factura: string;

  codigo_cliente: string;

  nombre_cliente: string;

  identidad: string;

  direccion_servicio: string;

  periodo: string;

  consumo: number;

  monto_total: number;

  fecha_emision: string;

  fecha_vencimiento: string;

  estado: string;
}
