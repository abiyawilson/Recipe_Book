import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit, OnDestroy {
  recipe: { name: string; description: string; image: string }[] = [];
  filteredRecipe: string = '';
  isFetching: boolean = true;
  error: string = '';
  onRefresh:Subscription

  constructor(
    private recipeService: RecipesService,
    private route: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRecipesList();

    // this.onRefresh = this.recipeService.recipeRefresh.subscribe((status: Boolean) => {
    //   if (status) {
    //     this.getRecipesList();
    //   }
    // });
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

  ngOnDestroy() {
    this.onRefresh.unsubscribe();
  }
}
