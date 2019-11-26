import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../ingredient";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() {}

  hiddenBlockNames = [
    'calculator',
    'create-recipe',
    'add-new-ingredient',
    'ingredient-list'
  ];

  ingredients: Ingredient[];

  ngOnInit() {
  }

  fillPage(event) {
    for (let name of this.hiddenBlockNames) {
      let component = document.getElementById(name);

      if(event === name) {
        component.setAttribute("style", "display: block");
      } else {
        component.setAttribute("style", "display: none");
      }
    }
  }

}


