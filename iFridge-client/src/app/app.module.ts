import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FooterComponent } from './component/footer/footer.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { AddNewIngredientComponent } from './add-new-ingredient/add-new-ingredient.component';
import { IngredientService } from './services/ingredient-service.service';
import { ListStorageService } from './services/list-storage.service';
import { ProfileComponent } from './profile/profile.component';
import { TokenInterceptor } from './interceptors/token-interceptor'
import { ErrorInterceptor } from './interceptors/error-interceptor';
import { HiddenComponent } from './hidden/hidden.component'
import { AuthGuard } from './interceptors/auth-guard.guard';
import { ShowRandomRecipeComponent } from './show-random-recipe/show-random-recipe.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { ShowFullDayRecipesComponent } from './show-full-day-recipes/show-full-day-recipes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CreateRecipeComponent,
    CalculatorComponent,
    IngredientsListComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    RecipeListComponent,
    AddNewIngredientComponent,
    ProfileComponent,
    HiddenComponent,
    ShowRandomRecipeComponent,
    ListManagerComponent,
    ShowFullDayRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard,
    IngredientService,
    ListStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
