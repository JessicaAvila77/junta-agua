export interface Proyecto{

id_proyecto:number
id_organizacion:number

nombre_proyecto:string
tipo_proyecto:string

descripcion:string
justificacion:string

descripcion_beneficiarios:string

benef_hombres:number
benef_mujeres:number
benef_ninos:number
benef_familias:number

fecha_aprobacion_asamblea:string
numero_acta:string

id_empleado_responsable:number

fecha_inicio:string
fecha_fin:string

estado:string

}