import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../services/rest-api.service";
import { Recipe } from '../recipe';

@Component({
  selector: 'app-show-random-recipe',
  templateUrl: './show-random-recipe.component.html',
  styleUrls: ['./show-random-recipe.component.scss']
})
export class ShowRandomRecipeComponent implements OnInit {

  recipe: Recipe;

  constructor(private service: RestApiService) { }

  ngOnInit() {
    this.service.getRandomRecipe().subscribe(data => this.recipe = data);
  }

}
