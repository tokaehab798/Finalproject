import { Component } from '@angular/core';


@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent {
  adminformname:string[]=[
    "Mohamed Ahmed ",
    "Hazem Ehab"
  ]
  adminformid:string[]=[
    "94260",
    "91222",
  ]
  adminformproblem:string[]=[
    "OverLoad Hours",
    "Grades",
  ]
  srcsofforms: { src: string, showSendTo: boolean, imageWidth: string }[] = [
    { src: "./assets/MohamedAhmed.jpg", showSendTo: false, imageWidth: '200px' },
    { src: "./assets/hazemehab.jpg", showSendTo: false, imageWidth: '200px' }
  ];

  selectedHandling(option: string, index: number) {
    if (option === 'Others') {
      this.srcsofforms[index].showSendTo = true;
      this.srcsofforms[index].imageWidth = "250px"; // Increase the width of the image
    } else {
      this.srcsofforms[index].showSendTo = false;
      this.srcsofforms[index].imageWidth = "200px"; // Reset the width of the image
    }
  }

  toggleSendTo(event: Event, index: number) {
    event.stopPropagation();
    this.srcsofforms[index].showSendTo = !this.srcsofforms[index].showSendTo;
  }

  toggleDropdown(event: MouseEvent): void {
    event.stopPropagation();
  }

}

