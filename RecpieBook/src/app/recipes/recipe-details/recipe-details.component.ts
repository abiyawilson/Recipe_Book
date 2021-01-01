import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RecipesService } from 'src/app/recipes.service';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnChanges, OnInit {
  recipe: Recipe;
  
  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipes:Recipe) => this.recipe = recipes
    )
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes))
  }
}
