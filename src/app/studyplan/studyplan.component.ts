import { Component } from '@angular/core';

@Component({
  selector: 'app-studyplan',
  templateUrl: './studyplan.component.html',
  styleUrls: ['./studyplan.component.css']
})
export class StudyplanComponent {
  flag:boolean=true;
  modelImag:string='';
  srcs:string[]=[
    "./assets/لائحة.png"
  ]
  hideelement( element:EventTarget|null ,img:HTMLImageElement):void{
    if(element==img) return;
    else
      this.flag=true;
    }
  
}
