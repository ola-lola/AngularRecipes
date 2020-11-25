import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simple test', 'https://wszystkiegoslodkiego.pl/storage/images/201930/ciasto-bajka-1.jpg',
            [
                new Ingredient('Meat',1),
                new Ingredient('Salt', 3)
            ]),
        new Recipe('A Test Recipe 2', 'This is a simple test', 'https://wszystkiegoslodkiego.pl/storage/images/201930/ciasto-bajka-1.jpg',
            [
                new Ingredient('Apple',5),
                new Ingredient('Banana', 3)
            ]),
        
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}