import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[]= [
    {
      id: 'r1',
      title: 'Bread',
      imageUrl: 'https://api.time.com/wp-content/uploads/2015/07/bread.jpeg?quality=85&w=1200&h=628&crop=1',
      ingredients: ['bla', 'bla']
    },
    {
      id: 'r2',
      title: 'Laura',
      imageUrl: 'https://thumbs.dreamstime.com/z/norwegian-fast-food-sausage-sasuage-pancake-consisting-potato-pancake-51750796.jpg',
      ingredients: ['bla', 'bla']
    }
  ]

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe=>{
      console.log('Recipe:', recipe)
      return recipe.id === recipeId;
    })}
  }
}
