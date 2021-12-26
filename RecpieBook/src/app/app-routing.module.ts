import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContributorContentComponent } from './contributions/contributor-content/contributor-content.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HomeComponent } from './shared/home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'recipe', component: RecipesComponent, children: [
    {path: 'recipelist', component: RecipeListComponent, children:[
      {path: ':name', component: RecipeDetailsComponent}
    ]}
  ]},
  {path: 'contributor', component: ContributorContentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'not-found' , component: NotFoundComponent, data: {message: 'Page Not Found!!!'}},
  {path: '**' , redirectTo: 'not-found'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class RoutingModule { }