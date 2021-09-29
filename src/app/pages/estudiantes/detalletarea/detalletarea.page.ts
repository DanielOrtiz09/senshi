import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalletarea',
  templateUrl: './detalletarea.page.html',
  styleUrls: ['./detalletarea.page.scss'],
})
export class DetalletareaPage implements OnInit {

  listaTareas:any[] = [];
  objTarea: any[];
  id: string;
  constructor(
    private route:ActivatedRoute
  ) {
    this.listaTareas = [
      {
        id:1,
        nombreTarea:"Tarea 1",
        fechaPublicada:"Lunes 4 de octubre 09:00:00",
        fechaEntrega:"Martes 5 de octubre 10:00:00",
        detalleTarea:"Desarrollar una aplicación móvil en ionic",
        docente:"Juan",
  
      },
      {
        id:2,
        nombreTarea:"Tarea 2",
        fechaPublicada:"Lunes 4 de octubre 12:00:00",
        fechaEntrega:"Miércoles 6 de octubre 10:00:00",
        detalleTarea:"Desarrollar una aplicación móvil en laravel y mysql",
        docente:"Miguel"
      },
      {
        id:3,
        nombreTarea:"Tarea 3",
        fechaPublicada:"Lunes 4 de octubre 13:00:00",
        fechaEntrega:"Jueves 7 de octubre 08:00:00",
        detalleTarea:"Traer el modelo entidad relación de la base de datos propuesta en la exposición del grupo 1",
        docente:"María"
      }
  
    ];
    this.route.params.subscribe(parameter => {
      this.id = parameter['id'];
    });
    
   }

  ngOnInit() {
    this.objTarea = this.listaTareas.filter(xx => xx.id === parseInt(this.id));
  }

}
