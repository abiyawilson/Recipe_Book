import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenicationService } from 'src/app/auth/authenication.service';
import { Recipe } from '../recipe-list/recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnChanges, OnInit , OnDestroy{
  recipe: Recipe;
  isFetching: boolean = true;
  error: string = '';
  id: string = '';
  owner:boolean = false
  private userSub: Subscription


  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenicationService
  ) {}

  ngOnInit(): void {
    this.userSub = this.route.params.subscribe((param: Params) => {
      this.recipeService.getRecipe(param.id).subscribe(
        (recipe: Recipe) => {
          this.userSub = this.authService.user.subscribe(user => {
            if(user.email === recipe.email) {
              this.owner = true
            }
          });
          this.id = param.id;
          this.isFetching = false;
          this.recipe = recipe;
        },
        (error) => {
          this.isFetching = false;
          this.error = error.message;
          console.log(error);
        }
      );
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes));
  }

  goBack() {
    this.router.navigate(['../recipelist'], { relativeTo: this.route });
  }

  onUpdate(): void {
    this.router.navigate(['../../updateRecipe/' + this.id], {
      relativeTo: this.route,
    });
  }

  onDelete(): void {
    this.recipeService.deleteRecipe(this.id).subscribe((event) => {
      this.router.navigate(['../recipelist'], { relativeTo: this.route });
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
