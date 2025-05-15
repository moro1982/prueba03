export class Persona {

    // private nombre: string;
    // private apellido: string;
    // private direccion: string;

    constructor(private nombre: string, private apellido: string, private direccion: string) {
        // Si no defino un modificador de acceso en el parametro, despues me arroja error
    }

    public superMetodo() {
        this.apellido = "Diamand";
        this.nombre = "Luciano";    // Aqui tiraria el error si no defino "private" en "nombre"
    }
}