import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  weight = 70;
  height = 180;
  age = 30;
  gender = "male";
  activity = "high";

  calculateCalories() {

    var someConst = (this.gender=="male") ? 66 : 655;
    var weightConst = (this.gender=="male") ? 13.7 : 9.6;
    var heightConst = (this.gender=="male") ? 5 : 1.8;
    var ageConst = (this.gender=="male") ? 6.76 : 4.7;
    var activity = (this.activity=="high") ? 1.7 : 1.3;

    return Math.round((
      someConst 
      + (weightConst * + this.weight) 
      + (heightConst * + this.height) 
      + (ageConst * + this.age)) 
      * activity);
  }

  

  zmienna = 'fajen hehe';

}
