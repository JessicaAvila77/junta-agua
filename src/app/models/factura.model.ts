export interface Factura {

  id_factura:number
  id_servicio:number
  id_tarifa:number
  id_lectura:number
  periodo:string
  fecha_emision:string
  fecha_vencimiento:string
  consumo:number
  monto_total:number
  estado:string

}