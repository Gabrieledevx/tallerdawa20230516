export class Persona{
    cedula: String;
    nombre: string;
    apellido: string;
    estado: Boolean;
    fechaNacimiento:Date;

    constructor( cedula: string, nombre: string, 
        apellido: string,estado: Boolean, fechaNacimiento: Date){
        this.cedula=cedula;
        this.nombre=nombre;
        this.apellido=apellido;
        this.estado=estado;
        this.fechaNacimiento=fechaNacimiento;
    }
}