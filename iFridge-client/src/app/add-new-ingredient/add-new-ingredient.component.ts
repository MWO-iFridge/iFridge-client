import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientService } from '../services/ingredient-service.service';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-add-new-ingredient',
  templateUrl: './add-new-ingredient.component.html',
  styleUrls: ['./add-new-ingredient.component.scss']
})
export class AddNewIngredientComponent {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  title: string = 'my title';
  ingredient : Ingredient;

  constructor(private route: ActivatedRoute,
                    private router: Router,
                      private ingredientService: IngredientService) {
                  this.ingredient = new Ingredient(); }

  onSubmit() {
        this.ingredientService.saveIntoFridge(this.ingredient);
        this.ingredientService.showFridge();
      //this.ingredientService.save(this.ingredient).subscribe(result => this.gotoIngredientList());
    }

    gotoIngredientList() {
      this.router.navigate(['/ingredients']);
    }

    changeTitle(newTitle: string): void {
        this.submit.emit(newTitle);
      }

}
