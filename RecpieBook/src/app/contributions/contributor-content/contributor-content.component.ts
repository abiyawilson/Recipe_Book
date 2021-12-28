import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RecipesService } from 'src/app/recipes.service';
import { Recipe } from 'src/app/recipes/recipe-list/recipe.model';

@Component({
  selector: 'app-contributor-content',
  templateUrl: './contributor-content.component.html',
  styleUrls: ['./contributor-content.component.css'],
})
export class ContributorContentComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('descInput', { static: false }) descInputRef: ElementRef;
  @ViewChild('imageInput', { static: false }) imageInputRef: ElementRef;
  @ViewChild('integridentInput', { static: false })
  integridentInputRef: ElementRef;
  @ViewChild('procedureInput', { static: false }) procedureInputRef: ElementRef;
  integridents: any[];
  showIntegiedentbox = false;

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {}

  onAddItem(): void {
    const cName = this.nameInputRef.nativeElement.value;
    const cDesc = this.descInputRef.nativeElement.value;
    const cimg = this.imageInputRef.nativeElement.value;
    const cintg = this.integridentInputRef.nativeElement.value;
    const cproc = this.procedureInputRef.nativeElement.value;
    const newRecipe = new Recipe(cName, cDesc, cimg, cintg, cproc);
    this.recipeService.addRecipe(newRecipe);
  }
}
