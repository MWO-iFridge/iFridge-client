import {Component} from '@angular/core';
import {Recipe} from '../recipe';
import {RestApiService} from '../services/rest-api.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent  {

  recipe: Recipe;
  isSaved: boolean;

  constructor(private service: RestApiService) {
    this.recipe = new Recipe();
   }

   onSubmit() {
     this.service.addRecipe(this.recipe).subscribe(() => this.isSaved = true);
   }

}
