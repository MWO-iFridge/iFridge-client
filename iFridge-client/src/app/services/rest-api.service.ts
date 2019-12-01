import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Recipe } from '../recipe';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private BACKEND_URL = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public getAllRecipes() {
    return this.httpClient.get(this.BACKEND_URL + '/recipe');
  }

  public getAllIngredients() {
    return this.httpClient.get(this.BACKEND_URL + '/ingredient');
  }

  public getRandomRecipe() {
    return this.httpClient.get<Recipe>(this.BACKEND_URL + '/random');
  }

  public addRecipe(recipe: Recipe) {
    return this.httpClient.post<Recipe>(this.BACKEND_URL + '/recipe', recipe);
  }

  public getHidden(){
    return this.httpClient.get<String>(this.BACKEND_URL + "/hidden")
  }
}
