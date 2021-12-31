import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoggerService } from './logger.service';
import { Recipe } from './recipes/recipe-list/recipe.model';

@Injectable()
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe(
      1,
      'Dosa',
      'Abiya Wilson',
      'A Kerala food that makes your tongue watery by its taste',
      'https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg',
      [
        '3/4 cup Parboiled Rice (idli-dosa rice)',
        '3/4 cup Regular Rice',
        '1/2 cup Whole Urad Dal (without skin) or Split Urad Dal (black lentils)',
        '1/4 teaspoon Fenugreek Seeds (methi dana)',
        '1/2 tablespoon Chana Dal (gram lentils), optional',
        'Water, as needed',
        'Salt to taste',
        'Oil, for shallow frying',
      ],
      [
        'Take all the ingredients to prepare the dosa batter. Rice, urad dal and fenugreek seeds are the main ingredients. Chana dal is used for getting a golden color for Dosa.',
        'Rinse both types of rice (regular rice and parboiled rice) together in water for 3-4 times and soak them in 2 cups of water for 4-5 hours (Place both types of rice in a medium-size bowl and fill it with water till 3/4th height. Rinse the rice by rubbing them between your fingertips; the water will turn cloudy. Drain the water and repeat the process 3-4 times).',
        'Rinse urad dal and chana dal together in water, add fenugreek seeds and soak in 1 cup water for 4-5 hours.',
        'Drain water from urad dal in a small bowl and reserve it (it will be used in the next step while grinding the dal). Add drained urad dal, chana dal and fenugreek seeds mixture in the medium jar of a mixer grinder or blender.',
        'Add water as needed and grind until smooth and fluffy batter (use water reserved in previous step, approx. 1½ cups water will required to grind 1/2 cup dry urad dal).',
        'The batter should be fluffy and not very thick. Transfer it to a large container',
        'Drain water from rice and add them to the same mixer grinder jar. Depending on the size of the jar, you can ground the rice in multiple batches.',
        'Add water as needed and grind until smooth texture. Don’t add too much water in a single go; add 1-2 tablespoons water at a time (approx. 1/2 cup water will required). Rice requires less water compared to urad dal while grinding. Rice batter will be little grainy and will not be as smooth as urad dal batter. Transfer it to the same container having urad dal batter in it.',
        'Add salt and mix both batters well using spoon. The final batter should not be too thick or too watery. Cover it with plate and leave it at room temperature for 8-10 hours or overnight for fermentation. During cold weather, keep the batter in warm place (or inside the oven with oven light on) for fermentation.',
        'During fermentation, the batter volume would increase and the tiny bubbles would appear on the surface when you stir it with a spoon. Stir the batter with a spoon. If it looks too thick, add few tablespoons water and mix well until it has attained pouring consistency (little watery than idli batter).',
        'Heat non-stick tava or iron tava (skillet or griddle) over medium flame. Sprinkle few drops of water on the surface. If water drops sizzle and evaporate within few seconds, tava is hot enough to cook. Apply 1/2-teaspoon oil on the griddle and spread it evenly with a spatula or a clean wet cloth. Take a ladle full of batter, pour it over the surface of tawa, swirl it as thin as possible in a spiral motion by rotating ladle and make it into round shape of approx. 7-8 inch diameter circle',
        'Apply 1-teaspoon oil (or ghee / butter for crispy dosa) around the edges of dosa (or spread oil/ghee/butter evenly with brush for crispy dosa).',
        'Cook until the bottom surface turns light brown and the edges start to come upward, it will take around 2-minutes.',
        'Flip it and cook for a minute. If you are making thin dosa (as shown in the photo), you do not need to cook the other side. Transfer it to a plate. Wipe tava with clean wet cloth before making next dosa (this is to prevent dosa from sticking to Pan) and repeat the process from step-11 to step-13 for remaining batter. Hot and crispy plain dosa is ready.',
      ]
    ),
    new Recipe(
      2,
      'Black Halwa',
      'Abiya Wilson',
      'A sweet that will melt in your mouth',
      'https://m.media-amazon.com/images/I/51ZEPhgSy5L.jpg',
      [
        '1½ cup (250 grams) jaggery / gud (dark variety)',
        '3 cup coconut milk (thin)',
        '½ cup (100 grams) rice flour (fine)',
        '1 cup coconut milk (thick)',
        '2 tsp ghee / clarified butter',
        '3 tbsp cashew / kaju (chopped)',
        '½ tsp cardamom powder',
      ],
      [
        'Firstly, in a large bowl take 1½ cup grated jaggery. make sure to take a dark variety of jaggery as it gives colour to halwa.',
        'Add 3 cup coconut milk and whisk until jaggery dissolves.',
        'Now add ½ cup rice flour and whisk well.',
        'Pour the mixture to a kadai and keep stirring.',
        'Cook on low flame until the mixture thickens.',
        'After 10 minutes, add 1 cup thick coconut milk and mix well.',
        'Continue to cook until the mixture thickens.',
        'After 25 minutes, add 1 tsp ghee and continue to mix.',
        'The mixture turns glossy and will be easy to stir.',
        'Add another tsp of ghee and continue to mix till the ghee is absorbed.',
        'Further, add 3 tbsp cashew and ½ tsp cardamom powder.',
        'Keep stirring on low flame, and the mixture dark brown colour.',
        'After 50-60 minutes, the mixture will start to release ghee and also turns black in colour.',
        'Transfer the halwa mixture to a greased tray and level up.',
        'Rest for 1 hour or until the halwa cools completely.',
        'Now unmould the halwa and cut to the desired shape.',
        'Finally, enjoy black halwa or store in an airtight container for a month.',
      ]
    ),
  ];

  itemNumber = this.recipes.length;
  login = new Subject<boolean>();
  userLoggedIn: boolean = false;

  constructor(
    private loggerService: LoggerService,
    private route: Router,
    private router: ActivatedRoute
  ) {}

  addRecipe(custRecipe: Recipe): void {
    this.recipes.push(custRecipe);
    this.loggerService.addLog('New Recipe Added');
    this.route.navigate(['../recipe/recipelist'], { relativeTo: this.router });
  }

  updateRecipe(changedRecipe: Recipe): void {
    for (let item of this.recipes) {
      if (item.id === changedRecipe.id) {
        for (let key in item) {
          item[key] = changedRecipe[key];
        }
      }
    }
    this.loggerService.addLog('Recipe Updated');
    this.route.navigate(['../recipe/recipelist'], { relativeTo: this.router });
  }

  getRecipe(id:string): Recipe {
    let obj = this.recipes.find((o) => o.id === parseInt(id));
    return obj;
  }

  deleteRecipe(recipe:Recipe){
    console.log(recipe)
    this.recipes.splice(recipe.id-1)
  }
}
