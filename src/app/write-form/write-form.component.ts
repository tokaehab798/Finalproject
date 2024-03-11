import { Component } from '@angular/core';

@Component({
  selector: 'app-write-form',
  templateUrl: './write-form.component.html',
  styleUrls: ['./write-form.component.css']
})
export class WriteFormComponent {
  hidelabel:boolean=true;
  Description:string='';
}
