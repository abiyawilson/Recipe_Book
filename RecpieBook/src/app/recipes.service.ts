import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes/recipe-list/recipe.model';

@Injectable()
export class RecipesService {
  recipes :Recipe[]=[
    new Recipe ("Dosa","A Kerala food that makes yoy tounge watery by its taste","https://media.istockphoto.com/photos/masala-dosa-with-variety-of-chutney-and-sambar-picture-id136503190?k=6&m=136503190&s=612x612&w=0&h=6rfluSgf6RWPUy6vWZuzsesZDyS0Y2GBzQ4_VM-nPUI="),
    new Recipe ("Halwa", "A sweet that will melt in your mouth", "https://1.bp.blogspot.com/-eHsqKLHqT6k/Xee9H2d_b2I/AAAAAAAAYAs/MlLdNLRwrVsJeFWWgW5PAzeasVvAcZIOQCLcBGAsYHQ/s1600/Kerala%2Bkarutha%2Bhalwa%2B10.JPG")
  ]

  recipeSelected = new EventEmitter<Recipe>()
  recipeAdded = new EventEmitter<string>()
  constructor() { }
}
