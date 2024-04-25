import { Component, OnInit, numberAttribute } from '@angular/core';
import { alumno } from 'src/Interfaces/alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {

  constructor() {}

  ngOnInit() {}

  alumnos : alumno[] = []//["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];

  agregarAlumno(): void{

    this.alumnos.push(this.nuevoAlumno);

    this.nuevoAlumno = {
      nombre: '',
      presente: false
    }
    
    alert(this.alumnos)

  }

  nuevoAlumno: alumno = { 
    nombre: '',
    presente: false
  }

}