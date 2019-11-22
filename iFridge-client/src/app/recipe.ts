import { Time } from '@angular/common';

export class Recipe {
    id: number;
    course: string;
    foodCategory: string;
    recipeName: string;
    recipeDescription: string;
    prepTime: Time;
    kcal: number;
}
