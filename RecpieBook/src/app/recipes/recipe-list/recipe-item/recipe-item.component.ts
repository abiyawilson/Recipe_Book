import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipesService } from 'src/app/recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipe: {name:string, description:string, image:string} [] = []
  
  constructor(private recipeService : RecipesService) { }
 
  ngOnInit(): void {
    this.recipe = this.recipeService.recipes
  }
  
  show(recipe:Recipe){
    this.recipeService.recipeSelected.emit(recipe);
  }
}
