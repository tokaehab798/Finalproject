import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  srcsofprojects:string[]=[
    "./assets/project4.png",
    "./assets/project1.png",
    "./assets/project2.png",
    "./assets/project7.jpg",
    "./assets/trashvision.jpg",
     "./assets/project8.jpg",
  ]
  projectname:string[]=[
    "Aerated Static composting Device",
    "Line Following Robot",
    "Face Recogentation",
    "Off Road Adventure Robot",
    "Trashvision project",
    "Qvoiding obstacle",
    
  ]
}
