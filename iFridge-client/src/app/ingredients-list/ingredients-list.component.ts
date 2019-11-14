import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {


  ingredients$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getIngredients().subscribe(
      data => this.ingredients$ = data
    )
  }

}
