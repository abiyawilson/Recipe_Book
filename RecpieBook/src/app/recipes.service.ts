import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from './logger.service';
import { Recipe } from './recipes/recipe-list/recipe.model';

@Injectable()
export class RecipesService {

  recipes: Recipe[] = [
    new Recipe ('Dosa', 'A Kerala food that makes your tounge watery by its taste', 'https://media.istockphoto.com/photos/masala-dosa-with-variety-of-chutney-and-sambar-picture-id136503190?k=6&m=136503190&s=612x612&w=0&h=6rfluSgf6RWPUy6vWZuzsesZDyS0Y2GBzQ4_VM-nPUI='),
    new Recipe ('Halwa', 'A sweet that will melt in your mouth', 'https://1.bp.blogspot.com/-eHsqKLHqT6k/Xee9H2d_b2I/AAAAAAAAYAs/MlLdNLRwrVsJeFWWgW5PAzeasVvAcZIOQCLcBGAsYHQ/s1600/Kerala%2Bkarutha%2Bhalwa%2B10.JPG')
  ];

  // recipeSelected = new EventEmitter<Recipe>();
  login = new EventEmitter<boolean>();

  constructor(private loggerService: LoggerService, private route: Router,
              private router: ActivatedRoute) { }

  addRecipe(custRecipe: Recipe): void {
    this.recipes.push(custRecipe);
    this.loggerService.addLog('Customer Recipe Added');
    this.route.navigate(['../recipe/recipelist'], {relativeTo: this.router});
  }

  getRecipe(name): Recipe{
    let obj = this.recipes.find(o => o.name === name);
    return obj 
  }

}
