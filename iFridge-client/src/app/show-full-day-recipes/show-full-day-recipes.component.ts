import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-show-full-day-recipes',
  templateUrl: './show-full-day-recipes.component.html',
  styleUrls: ['./show-full-day-recipes.component.scss']
})
export class ShowFullDayRecipesComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private service: RestApiService) { }

  ngOnInit() {
    for(var i=0; i<5; i++) {
      this.recipes.push(new Recipe());
      this.service.getRandomRecipe().subscribe(data => this.recipes[i] = data);
    }
  }

}
