import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FooterComponent } from './component/footer/footer.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CreateRecipeComponent,
    CalculatorComponent,
    FooterComponent,
    IngredientsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
