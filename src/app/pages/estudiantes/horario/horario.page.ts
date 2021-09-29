import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  listaHorario:any[] = [];
  fechaActual:any = new Date().toUTCString();

  constructor() { 
    this.listaHorario = [
      {
        dia:"Lunes",
        materias:[
          {
            docente:"Juan",
            nombreMateria:"Programación Movil",
            horaInicio:"08:00:00",
            horaFin:"10:00:00"
          },
          {
            docente:"Cristina",
            nombreMateria:"Inteligencia Artificial",
            horaInicio:"10:30:00",
            horaFin:"12:30:00"
          }
        ]
      },
      {
        dia:"Martes",
        materias:[
          {
            docente:"María",
            nombreMateria:"Base de datos 2",
            horaInicio:"08:00:00",
            horaFin:"10:00:00"
          },
          {
            docente:"Fernando",
            nombreMateria:"Análisis de Algoritmo",
            horaInicio:"10:30:00",
            horaFin:"12:30:00"
          }
        ]
      },
      {
        dia:"Miércoles",
        materias:[
          {
            docente:"Juan",
            nombreMateria:"Programación Movil",
            horaInicio:"08:00:00",
            horaFin:"10:00:00"
          },
          {
            docente:"Ricardo",
            nombreMateria:"Electrónica Digital",
            horaInicio:"10:30:00",
            horaFin:"12:30:00"
          }
        ]
      },
      {
        dia:"Jueves",
        materias:[
          {
            docente:"Luís",
            nombreMateria:"Marketing",
            horaInicio:"08:00:00",
            horaFin:"10:00:00"
          }
        ]
      },
      {
        dia:"Viernes",
        materias:[
          {
            docente:"María",
            nombreMateria:"Base de datos 2",
            horaInicio:"08:00:00",
            horaFin:"10:00:00"
          },
          {
            docente:"Jessica",
            nombreMateria:"Aministración de Empresas Informáticas",
            horaInicio:"10:30:00",
            horaFin:"12:30:00"
          }
        ]
      }


    ]
  }

  ngOnInit() {
  }

}
