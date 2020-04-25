import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];

  constructor(private recipeSerice: RecipesService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log('IonViewWillEnter')
    this.recipes = this.recipeSerice.getAllRecipes();
  }
  ionViewDidEnter(){
    console.log('IonViewDidEnter')
  }
  ionViewWillLeave(){
    console.log('IonViewWillLeave')
  }
  ionViewDidLeave(){
    console.log('IonViewDidLeave')
  }
}
