import {RecipeStep} from "./model/recipeStep";
import {Quantity} from "./model/quantity";

export class Recipe {
    id: number;
    course: string;
    foodCategory: string;
    recipeName: string;
    recipeDescription: string;
    prepTime: Date;
    kcal: number;
    recipeStepDtoList: RecipeStep[];
    quantityDtoList: Quantity[];
}
