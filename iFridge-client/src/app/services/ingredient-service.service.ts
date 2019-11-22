import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../ingredient';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredientUrl: string;

  constructor(private http: HttpClient) {
    this.ingredientUrl = 'http://localhost:8080/ingredient';
  }
  public findAll(): Observable<Ingredient[]> {
       return this.http.get<Ingredient[]>(this.ingredientUrl);
  }
  public save(ingredient: Ingredient) {
    return this.http.post<Ingredient>(this.ingredientUrl, ingredient);
  }
}

