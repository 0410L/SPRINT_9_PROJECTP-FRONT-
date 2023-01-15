import { Time } from "@angular/common";

export interface Valoracion {
    id_valoracion: number,
    fecha: Date,
    alumno_id: number,
    desayuno: string,
    comida_primero: string,
    comida_segundo: string,
    comida_postre: string,
    merienda: string,
    dormir_inicio: Time,
    dormir_final: Time,
    deposiciones: number,
    observaciones: string
}