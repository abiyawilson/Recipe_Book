import { OnInit } from '@angular/core';
import { Component} from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipes/recipe-list/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'home';
  custRecipe : Recipe;
  constructor(private recipeService: RecipesService){

  }
  ngOnInit(){
    this.recipeService.recipeAdded.subscribe (
      (status: string) => this.onCustAdded(status))
   
  }
  navValue(feature: string){
    this.loadedFeature = feature;
  }
  onCustAdded(content:string){
    if(content){
      this.loadedFeature = 'recipe'
    }
  }
}
