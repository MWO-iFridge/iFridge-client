import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { AddNewIngredientComponent } from './add-new-ingredient/add-new-ingredient.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HiddenComponent } from './hidden/hidden.component';
import { AuthGuard } from './interceptors/auth-guard.guard' 

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'hidden', component: HiddenComponent, canActivate: [AuthGuard] },
  { path: 'ingredients', component: IngredientsListComponent },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
