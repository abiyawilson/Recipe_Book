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
  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {}

  // save() {
  //   this.recipeService.saveRecipe()
  // }
}
