import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  private recipesUrl: string;

  constructor(private http: HttpClient) {
    this.recipesUrl = 'http://localhost:4200/recipes';
   }

   public findAll(): Observable<Recipe[]> {
     return this.http.get<Recipe[]>(this.recipesUrl);
   }

   public save(recipe: Recipe) {
     return this.http.post<Recipe>(this.recipesUrl, recipe);
   }
}
