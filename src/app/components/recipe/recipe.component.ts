import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/service/data-getter.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() isNew: boolean;
  @Output() addRecipe = new EventEmitter();
  @Output() cancelAddingRecipe = new EventEmitter();
  title: string;


  constructor() { }

  ngOnInit() {
    if(this.isNew) {
      this.recipe = {
        code: null,
        patient:  '',
        doctor: '',
        birth: ''
      };
      this.title = 'New Recipe';
    }
  }

  addNew() {
    if (this.isNew) {
      this.addRecipe.emit(this.recipe);
    }
  }

  cancelAdding() {
    if (this.isNew) {
      this.cancelAddingRecipe.emit();
    }
  }

}
