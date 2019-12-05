import {Component, OnInit, Output} from '@angular/core';
import { IngredientService } from '../services/ingredient-service.service';
import {Ingredient} from '../ingredient';

@Component({
  selector: 'list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  @Output() ingredient: Ingredient;
  title = 'Moje produkty';
  list: Ingredient[];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.list = this.ingredientService.getIngredientList();
    this.ingredientService.change.subscribe(list => {
      this.list = list;
    });
  }

  addItem(ingredient: Ingredient): void {
    this.list = this.ingredientService.addItem(ingredient);
    this.ingredientService.change.subscribe(list => {
      this.list = list;
    });
  }

  removeItem(ingredient) {
    this.ingredientService.remove(ingredient);
  }
}
