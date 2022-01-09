import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { FootersComponent } from './shared/footers/footers.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { HeadersComponent } from './shared/headers/headers.component';
import { CommonModule } from '@angular/common';
import { ContributorContentComponent } from './contributions/contributor-content/contributor-content.component';
import { HomeComponent } from './shared/home/home.component';
import { LoggerService } from './logger.service';
import { RoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateRecipeComponent } from './recipes/update-recipe/update-recipe.component';
import { FilterPipe } from './filter.pipe';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { RecipesService } from './recipes/recipes.service';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { AlertPlaceHolderDirective } from './shared/placeHolders/alert-place-holder.directive';
import { AlertComponent } from './shared/alert/alert.component';

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
    FilterPipe,
    SpinnerComponent,
    ForgotPasswordComponent,
    AlertPlaceHolderDirective,
    AlertComponent,
  ],

  imports: [
    BrowserModule,
    CommonModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [RecipesService, LoggerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}
