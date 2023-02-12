import { Time } from "@angular/common";

export interface ProfesorValoracion {
    nombre: string,
    fecha: Date,
    alumno_id: number,
    desayuno: string,
    comida_primero: string,
    comida_segundo: string,
    comida_postre: string,
    merienda: string,
    dormir_inicio: string,
    dormir_final: string,
    deposiciones: number,
    observaciones: string,
}