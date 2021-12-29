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
  login:boolean = false

  constructor(
    private recipeService: RecipesService,
    private route: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipe = this.recipeService.recipes;
  }

  getRecipe(id: string) {
    this.route.navigate(['../' + id], { relativeTo: this.router });
  }
}
