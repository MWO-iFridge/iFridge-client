import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../services/rest-api.service";
import {IngredientService} from  "../services/ingredient-service.service";
import {Ingredient} from  "../ingredient";
@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredientService.findAll().subscribe(data => this.ingredients = data);
  }
}
