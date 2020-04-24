import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[]= [
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

  ngOnInit() {
  }

}
