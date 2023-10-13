import { firebaseApp$ } from "@angular/fire/app"

export interface Asignatura {
    id: string,
    nombre_asig: string,
    seccion: string,
    asistencia: Asistencia[]
}

export interface Asistencia {
    fecha: string,
    hora: string,
    estaPresente: boolean // Presente = true, Ausente = False
}