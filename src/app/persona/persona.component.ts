import { Component } from '@angular/core';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  cedula = "";
  nombre = "";
  apellido = "";
  fechaNacimiento: Date | undefined;
  estado = true;
  listPersona: Persona[] = [];

  agregarPersona(): void {
    if (this.fechaNacimiento === undefined) {
      // No se proporcionó una fecha de nacimiento válida
      return;
    }

    const persona: Persona = {
      cedula: this.cedula,
      nombre: this.nombre,
      apellido: this.apellido,
      estado: this.estado,
      fechaNacimiento: new Date(this.fechaNacimiento)
    };

    this.listPersona.push(persona);

    // Resto del código para procesar la lista de personas
  }

  eliminarPersona(indice:number): void{
    this.listPersona.splice(indice,1);

  }

  actualizarPersona(persona:Persona, indice:number){
    console.log(persona);
    this.listPersona[indice].estado=!persona.estado;
  }
}
