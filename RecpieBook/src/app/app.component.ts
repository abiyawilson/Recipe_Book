import { Component} from '@angular/core';
import { Recipe } from './recipes/recipe-list/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'home'
  custRecipe : Recipe 

  navValue(feature: string) {
    this.loadedFeature = feature;
  }
  onCustAdded(content: Recipe){
    this.custRecipe = content;
    this.loadedFeature = 'recipe'
  }
}
