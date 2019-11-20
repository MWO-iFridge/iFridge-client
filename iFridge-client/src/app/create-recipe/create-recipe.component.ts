import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent  {

  recipe: Recipe;

  constructor(private recipeService: RecipeServiceService) {
    this.recipe = new Recipe();
   }

   onSubmit() {
     this.recipeService.save(this.recipe);
   }

}
