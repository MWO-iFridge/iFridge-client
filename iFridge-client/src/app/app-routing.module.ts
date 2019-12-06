import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IngredientsListComponent} from './ingredients-list/ingredients-list.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {HiddenComponent} from './hidden/hidden.component';
import {AuthGuard} from './interceptors/auth-guard.guard'
import {CreateRecipeComponent} from "./create-recipe/create-recipe.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'hidden', component: HiddenComponent, canActivate: [AuthGuard] },
  { path: 'ingredients', component: IngredientsListComponent },
  { path: 'profile' , component: ProfileComponent },
  { path: 'create-recipe' , component: CreateRecipeComponent },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
