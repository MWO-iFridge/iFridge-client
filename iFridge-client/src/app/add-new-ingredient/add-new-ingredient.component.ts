import {Component, OnInit, Input, Output, EventEmitter, HostListener} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientService } from '../services/ingredient-service.service';
import { ListManagerComponent } from '../list-manager/list-manager.component';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-add-new-ingredient',
  templateUrl: './add-new-ingredient.component.html',
  styleUrls: ['./add-new-ingredient.component.scss']
})
export class AddNewIngredientComponent {
  @Output() listManager: ListManagerComponent;
  @Output() submit: EventEmitter<string> = new EventEmitter();
  @Output() submitter: EventEmitter<Ingredient> = new EventEmitter();
  title: string = 'my title';
  ingredient : Ingredient;

  constructor(      private route: ActivatedRoute,
                    private router: Router,
                    private ingredientService: IngredientService ) {
                    this.ingredient = new Ingredient();
                    }

  addItem(item: Ingredient) {
      this.ingredientService.save(this.ingredient);
   }

  onSubmit() {
    this.submitter.emit(this.ingredient);
    this.ingredientService.addItem(this.ingredient);
    this.ingredientService.getIngredientList();
    this.submit.emit(this.ingredient.name);
    this.ingredient = new Ingredient();
    this.ingredientService.toggle();
  }
}
