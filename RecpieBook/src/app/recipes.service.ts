import { HttpClient, HttpEventType, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LoggerService } from './logger.service';
import { Recipe } from './recipes/recipe-list/recipe.model';

@Injectable()
export class RecipesService {
  error = new Subject<boolean>();
  recipeRefresh = new Subject<boolean>();

  constructor(
    private loggerService: LoggerService,
    private route: Router,
    private router: ActivatedRoute,
    private http: HttpClient
  ) {}

  addRecipe(custRecipe: Recipe): void {
    this.http
      .post<{ name: string }>(
        'https://recipe-book-3c669-default-rtdb.firebaseio.com/recipes.json',
        custRecipe,
        {
          observe: 'response',
        }
      )
      .subscribe(
        (responseData) => {
          this.loggerService.addLog('Recpie Added ' + responseData);
          this.recipeRefresh.next(true);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
    this.route.navigate(['../recipe/recipelist'], { relativeTo: this.router });
  }

  getRecipeList() {
    return this.http
      .get<{ [key: string]: Recipe }>(
        'https://recipe-book-3c669-default-rtdb.firebaseio.com/recipes.json',
        {
          params: new HttpParams().append('print', 'pretty'),
          responseType: 'json',
        }
      )
      .pipe(
        map(
          (responseData: {
            [x: string]: any;
            hasOwnProperty: (arg0: string) => any;
          }) => {
            const RecipeArray: Recipe[] = [];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                RecipeArray.push({ ...responseData[key], id: key });
              }
            }
            return RecipeArray;
          }
        )
      );
  }

  updateRecipe(changedRecipe: Recipe, id: string): void {
    this.http
      .put<{ name: string }>(
        'https://recipe-book-3c669-default-rtdb.firebaseio.com/recipes/' +
          id +
          '.json',
        changedRecipe,
        {
          observe: 'response',
        }
      )
      .subscribe(
        (responseData) => {
          this.loggerService.addLog('Recpie Updated ' + responseData);
          this.recipeRefresh.next(true);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
     this.route.navigate(['../recipe/recipelist/'], { relativeTo: this.router });
  }

  getRecipe(id: string) {
    return this.http
      .get<{ [key: string]: Recipe }>(
        'https://recipe-book-3c669-default-rtdb.firebaseio.com/recipes/' +
          id +
          '.json',
        {
          params: new HttpParams().append('print', 'pretty'),
          responseType: 'json',
        }
      )
      .pipe(
        map((responseData: any) => {
          let recipeDetails: Recipe = null;
          if (responseData) {
            recipeDetails = responseData;
            recipeDetails[id] = responseData.key;
          }
          return recipeDetails;
        })
      );
  }

  deleteRecipe(id: string) {
    return this.http
      .delete(
        'https://recipe-book-3c669-default-rtdb.firebaseio.com/recipes/' +
          id +
          '.json',
        {
          observe: 'events',
          responseType: 'text',
        }
      )
      .pipe(
        tap((event) => {
          if (event.type === HttpEventType.Response) {
            this.loggerService.addLog('Recpie Deleted ' + event);
            this.recipeRefresh.next(true);
          }
        })
      );
  }
}
