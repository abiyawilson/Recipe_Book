import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() customerAdded : Recipe;
  recipeDesc : Recipe;
  custContents : Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
