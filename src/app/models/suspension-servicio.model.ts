export interface SuspensionServicio {

  id_suspension: number

  id_servicio: number

  // Información del servicio (para mostrar en la interfaz)
  codigo_cliente?: string
  nombre_cliente?: string
  direccion_servicio?: string
  tipo_servicio?: string

  // Datos de la suspensión
  fecha_suspension: string
  motivo: string

  // Datos de reconexión
  fecha_reconexion?: string

  // Estado del registro
  estado: 'Suspendido' | 'Reconectado'

}