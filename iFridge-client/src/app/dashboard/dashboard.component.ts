import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../ingredient";
import { IngredientService } from '../services/ingredient-service.service';
import { ListStorageService } from '../services/list-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'tytul';
  list;

  constructor(private ingredientService:IngredientService) {}

  hiddenBlockNames = [
    'calculator',
    'create-recipe',
    'show-full-day-recipes',
    'show-random-recipe'
  ];

  ingredients: Ingredient[];

  ngOnInit() {
    this.list = this.ingredientService.getIngredientList();
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


