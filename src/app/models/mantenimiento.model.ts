export interface Mantenimiento {
  id_mantenimiento: number;
  id_activo: number;
  tipo_mantenimiento: string;
  descripcion: string;
  fecha_programada: string;
  fecha_ejecucion: string;
  estado: string;
  empleados: string[]; 
}