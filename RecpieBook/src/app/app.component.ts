import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipes/recipe-list/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedFeature = 'home';
  custRecipe: Recipe;
  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {}

  navValue(feature: string): void {
    this.loadedFeature = feature;
  }

  onCustAdded(content: string): void {
    if (content) {
      this.loadedFeature = 'recipe';
    }
  }
}
