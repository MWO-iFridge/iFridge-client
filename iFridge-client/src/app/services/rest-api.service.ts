import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
}
