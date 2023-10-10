import { firebaseApp$ } from "@angular/fire/app"

export interface Asignatura {
    nombre_asig: string,
    seccion: string,
    asistencia: Asistencia[]

}

export interface Asistencia {
    fecha: any,
    estaPresente: boolean, // Presente = true, Ausente = False
}