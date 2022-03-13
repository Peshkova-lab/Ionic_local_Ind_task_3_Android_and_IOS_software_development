import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataGetterService } from '../service/data-getter.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.page.html',
  styleUrls: ['./medicines.page.scss'],
})
export class MedicinesPage implements OnInit {

  showNew = false;
  showEdit = -1;

  recipeCode: number;
  medicines: any[];

  constructor(private dataGetter: DataGetterService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.recipeCode = +this.route.snapshot.paramMap.get('recipeCode');
    this.dataGetter.getMedicines(this.recipeCode).subscribe(
      data => {
        this.medicines = data;
      }
    );
  }


  add() {
    this.showNew = true;
  }

  addMedicine(medicine) {
    this.dataGetter.addMedicine(medicine);
    this.showNew = false;
  }

  delete(index: number) {
    this.dataGetter.deleteMedicine(index);
  }
}
