import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent  {

  prepTime: number;
  recipe: Recipe;

  constructor(private service: RestApiService) {
    this.recipe = new Recipe();
   }

   onSubmit() {
     this.recipe.prepTime.minutes = this.prepTime%60;
     this.recipe.prepTime.hours = this.prepTime/60;
     this.service.addRecipe(this.recipe);
   }

}
