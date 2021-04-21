import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { FootersComponent } from './shared/footers/footers.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { HeadersComponent } from './shared/headers/headers.component';
import { CommonModule } from '@angular/common';
import { ContributorContentComponent } from './contributions/contributor-content/contributor-content.component';
import { HomeComponent } from './shared/home/home.component';
import { RecipesService } from './recipes.service';
import { LoggerService } from './logger.service';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipeItemComponent,
    HeadersComponent,
    FootersComponent,
    ContributorContentComponent,
    HomeComponent,
    
   
  ],
  imports: [
    BrowserModule,
    CommonModule 
  ],
  providers: [RecipesService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
