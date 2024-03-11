import { Component } from '@angular/core';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent {
  srcsofcompetitions:string[]=[
    "./assets/competition2.png",
    "./assets/competition1.png",
    "./assets/competiton3.png"
  ]
  tittlesNames:string[]=[
    "LLM Prompt Recovery",
    "Enefit-Predict Energy Behavior of Prosumers",
    "Digit Recognizer"
  ]
  tittlediscription:string[]=[
   
    "LLMs are commonly used to rewrite or make stylistic changes to text. The goal of this competition is to recover the LLM prompt that was used to transform a given text.",
    "The goal of the competition is to create an energy prediction model of prosumers to reduce energy imbalance costs.",
    "The goal in this competition is to take an image of a handwritten single digit, and determine what that digit is.For every in the test set, you should predict the correct label.",
  ]
}
