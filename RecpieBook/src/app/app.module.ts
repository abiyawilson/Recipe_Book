import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { FootersComponent } from './shared/footers/footers.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { HeadersComponent } from './shared/headers/headers.component';
import { CommonModule } from '@angular/common';
import { ContributorContentComponent } from './contributions/contributor-content/contributor-content.component';
import { HomeComponent } from './shared/home/home.component';
import { RecipesService } from './recipes.service';
import { LoggerService } from './logger.service';
import { RoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateRecipeComponent } from './recipes/update-recipe/update-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    HeadersComponent,
    FootersComponent,
    ContributorContentComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    UpdateRecipeComponent,
  ],

  imports: [BrowserModule, CommonModule, RoutingModule, FormsModule, ReactiveFormsModule] ,

  providers: [RecipesService, LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
