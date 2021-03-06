import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Ingredient} from '../ingredient';
import {HttpClient} from '@angular/common/http';
import {ListStorageService} from './list-storage.service';

@Injectable()
export class IngredientService {

  @Output() change: EventEmitter<Ingredient[]> = new EventEmitter();

  private ingredientUrl: string;
  private list: Ingredient[];

  constructor(private http: HttpClient, private storage: ListStorageService ) {
    this.ingredientUrl = 'http://localhost:8080/ingredient';
  }
  public findAll(): Observable<Ingredient[]> {
       return this.http.get<Ingredient[]>(this.ingredientUrl);
  }
  public save(ingredient: Ingredient) {
    return this.storage.post(ingredient);
  }

  public saveIntoFridge(ingredient: Ingredient) {
    localStorage.setItem(JSON.stringify(ingredient),  JSON.stringify(ingredient) );
  }
  public showFridge() {
    console.log({...localStorage});
    return  {...localStorage};
  }
  getIngredientList() {
    return this.storage.get();
  }

  addItem(item: Ingredient) {
    this.list = this.getIngredientList();
    return this.storage.post(item);
  }

  toggle() {
    this.list = this.getIngredientList();
    this.change.emit(this.list);
  }

  remove(ingredient: Ingredient) {
    this.storage.destroy(ingredient);
    this.list = this.getIngredientList();
    this.change.emit(this.list);
  }
}

