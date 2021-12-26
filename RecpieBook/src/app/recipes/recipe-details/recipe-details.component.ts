import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from 'src/app/recipes.service';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnChanges, OnInit {
  recipe: Recipe;
  name : string;

  constructor(private recipeService: RecipesService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipes: Recipe) => this.recipe = recipes
    // );
    this.route.params
      .subscribe(
        (param: Params) => {
          this.recipe = this.recipeService.getRecipe(param.name);
        }
      );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes));
  }
}
