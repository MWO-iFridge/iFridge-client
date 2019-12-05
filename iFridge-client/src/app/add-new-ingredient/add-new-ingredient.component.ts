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

    gotoIngredientList() {
      this.router.navigate(['/ingredients']);
    }

    changeTitle(newTitle: string): void {
        this.submit.emit(newTitle);
      }

    changeAmount(newAmount: string): void {
            this.submit.emit(newAmount);
    }

  addItem(item: Ingredient) {
      this.ingredientService.save(this.ingredient);
   }

  onSubmit() {
    this.submitter.emit(this.ingredient);
    this.ingredientService.save(this.ingredient);
  }
}
