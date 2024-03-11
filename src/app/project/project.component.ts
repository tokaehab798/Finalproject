import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  srcsofproject:string[]=[
    "./assets/project9.jpg",
    "./assets/project10.jpg",
    "./assets/project12.jpeg"
  ]
  srcsofprojectteam:string[]=[
  "./assets/ziad2.jpg",
  "./assets/project11.jpg",
  "./assets/asmaa.jpg"
  ]
  srcsofteamname:string[]=[
    "Ziad Algendi",
    "Abdul-Rahman Al-Jammal",
    "Asmaa Elsayed",
    "Shaimaa Salah",
  ]

}
