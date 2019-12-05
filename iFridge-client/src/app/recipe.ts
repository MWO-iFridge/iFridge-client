import { Time } from '@angular/common';
import { FoodCategory } from './food-category';

export class Recipe {
    id: number;
    course: string;
    foodCategory: FoodCategory;
    recipeName: string;
    recipeDescription: string;
    prepTime: Time;
    kcal: number;
}
