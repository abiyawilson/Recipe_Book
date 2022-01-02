import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  recipe: { name: string; description: string; image: string }[] = [];
  filteredRecipe: string = '';
  isFetching: boolean = true;
  error: string = '';

  constructor(
    private recipeService: RecipesService,
    private route: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRecipesList();

    this.recipeService.recipeRefresh.subscribe((status: Boolean) => {
      if (status) {
        this.getRecipesList();
      }
    });
  }

  getRecipesList() {
    this.recipeService.getRecipeList().subscribe(
      (recipe) => {
        this.isFetching = false;
        this.recipe = recipe;
      },
      (error) => {
        this.isFetching = false;
        this.error = error.message;
        console.log(error);
      }
    );
  }

  getRecipe(id: string) {
    this.route.navigate(['../' + id], { relativeTo: this.router });
  }
}
