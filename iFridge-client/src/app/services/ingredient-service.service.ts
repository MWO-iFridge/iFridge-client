import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../ingredient';
import { HttpClient } from '@angular/common/http';
import { ListStorageService } from './list-storage.service';

@Injectable()
export class IngredientService {

  private ingredientUrl: string;

  constructor(private http: HttpClient, private storage: ListStorageService ) {
    this.ingredientUrl = 'http://localhost:8080/ingredient';
  }
  public findAll(): Observable<Ingredient[]> {
       return this.http.get<Ingredient[]>(this.ingredientUrl);
  }
  public save(ingredient: Ingredient) {
    return this.http.post<Ingredient>(this.ingredientUrl, ingredient);
  }

  public saveIntoFridge(ingredient: Ingredient) {
    localStorage.setItem(JSON.stringify(ingredient),  JSON.stringify(ingredient) );
  }
  public showFridge(){
  console.log({...localStorage});
    return  {...localStorage};
  }
  getList() {
    return this.storage.get();
  }

  addItem(item) {
    return this.storage.post(item);
  }
}

