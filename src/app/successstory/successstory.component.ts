import { Component } from '@angular/core';

@Component({
  selector: 'app-successstory',
  templateUrl: './successstory.component.html',
  styleUrls: ['./successstory.component.css']
})
export class SuccessstoryComponent {
  srcsofprojects:string[]=[
    "./assets/comp2.jpg",
    "./assets/competition1.jpg",
    "./assets/cli2.jpg"
  ]

  compmember:string[]=[
    "./assets/usama.jpg",
    "./assets/ezz.jpg",
  ]
  compName:string[]=[
    "Mohamed Usamah",
    "Mohamed Ezz",
  ]
}
