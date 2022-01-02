import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ContributorContentComponent } from './contributions/contributor-content/contributor-content.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeResolverService } from './recipes/recipe-resolver.service';
import { RecipesComponent } from './recipes/recipes.component';
import { UpdateRecipeComponent } from './recipes/update-recipe/update-recipe.component';
import { HomeComponent } from './shared/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'recipe',
    component: RecipesComponent,
    children: [
      { path: 'recipelist', component: RecipeItemComponent, resolve: [RecipeResolverService] },
      { path: ':id', component: RecipeDetailsComponent },
    ],
  },
  { path: 'contributor', canActivate: [AuthGuard], component: ContributorContentComponent },
  { path: 'updateRecipe/:id', canActivate: [AuthGuard], component: UpdateRecipeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: { message: 'Page Not Found!!!' },
  },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class RoutingModule {}
