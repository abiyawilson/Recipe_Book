import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from 'src/app/recipes.service';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnChanges, OnInit {
  recipe: Recipe;
  
  login: boolean = false;

  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.recipe = this.recipeService.getRecipe(param.id);
      this.login =  this.recipeService.userLoggedIn
    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes));
  }

  goBack() {
    this.router.navigate(['../recipelist'], { relativeTo: this.route });
  }

  onUpdate() :void {
    this.router.navigate(['../../updateRecipe/'+this.recipe.id], { relativeTo: this.route });
  }
}
