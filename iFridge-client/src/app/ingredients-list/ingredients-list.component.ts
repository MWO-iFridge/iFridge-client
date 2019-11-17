import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../services/rest-api.service";

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {

  ingredients$: Object;

  constructor(private api: RestApiService) { }

  ngOnInit() {
    this.api.getAllIngredients().subscribe(data => this.ingredients$ = data);
  }

}
