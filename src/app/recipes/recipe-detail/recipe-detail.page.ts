import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(private activatdRoute: ActivatedRoute,
     private recipeService: RecipesService) { }

  ngOnInit() {
    this.activatdRoute.paramMap.subscribe(param=>
      {
        if(!param.has('recipeId')){
          //redirect
          return;
        }
        const recipeId = param.get('recipeId');
        console.log('Id: ', recipeId);
        console.log("Loaded Recipe: ", this.recipeService.getRecipe(recipeId));
        this.loadedRecipe = this.recipeService.getRecipe(recipeId);
      });
  }

}
