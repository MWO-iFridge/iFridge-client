import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RestApiService) { }

  ngOnInit() {
  }

}
