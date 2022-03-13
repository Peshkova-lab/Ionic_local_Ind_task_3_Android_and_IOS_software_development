import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataExchangerService } from '../service/data-exchanger.service';
import { DataGetterService, Recipe } from '../service/data-getter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  extraData: string;

  recipes: Recipe[];

  showNew = false;
  showEdit = -1;

  userName: string;

  constructor(private dataGetter: DataGetterService,
    private router: Router,
    
    private route: ActivatedRoute,
    private dataExchanger: DataExchangerService) {
     

      this.dataExchanger.getData().subscribe(
        data => this.extraData = data
      );

    this.dataGetter.getRecipes().subscribe(
      (data) => {
        this.recipes = data;
      }
    );
    this.userName = this.dataGetter.getUser();
  }

  add() {
    this.showNew = true;
  }

  delete(index: number) {
    this.dataGetter.deleteRecipe(index);
  }

  addRecipe(recipe) {
    this.dataGetter.addRecipe(recipe);
    this.showNew = false;
  }

  sendData() {
   this.dataExchanger.publishData(this.extraData);
   this.router.navigate(['/data-sender']);
  }

}
