import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../services/ingredient-service.service';
import { ListStorageService } from '../services/list-storage.service';

@Component({
  selector: 'list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  title = 'Moje produkty';
  list;

  constructor(private ingredientService:IngredientService) { }

  ngOnInit() {
    this.list = this.ingredientService.getList();
  }

  addItem(title): void {
    this.list = this.ingredientService.addItem({ title });
  }
}
