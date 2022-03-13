import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Recipe {
  code: number;
  patient: string;
  doctor: string;
  birth: string;
}

export interface Medicine {
  name: string;
  recipeCode: number;
  dosage: string;
  form: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {
  private recipes: Recipe[] = [
    {
    code: 1,
    patient: `Patient_1`,
    doctor: `Doctor_1`,
    birth: `12.09.1985`
    },
    {
    code: 2,
    patient: `Patient_2`,
    doctor: `Doctor_1`,
    birth: `24.05.1998`
    },
  ];

  private medicines = [
    {name: 'Medicine_1', 
    recipeCode: 1, 
    dosage: 'twice a day', 
    form: 'tablet'},
    {name: 'Medicine_2', 
    recipeCode: 2, 
    dosage: 'twice a day', 
    form: 'syrup'},
    {name: 'Medicine_3', 
    recipeCode: 2, 
    dosage: 'once a day', 
    form: 'tablet'},
    {name: 'Medicine_4', 
    recipeCode: 1, 
    dosage: 'once a day', 
    form: 'tablet'},
    {name: 'Medicine_5', 
    recipeCode: 2, 
    dosage: 'twice a day', 
    form: 'injection'},
    {name: 'Medicine_6', 
    recipeCode: 1, 
    dosage: 'once a day', 
    form: 'injection'},
  ]

  private userName = '';
  private users = [
    'Admin', 'User', 'Test'
  ];

  constructor() { }

  getUser() {
    return this.userName;
  }

  setUser(name: string) {
    this.userName = name;
  }

  userExists(name: string): boolean {
    return this.users.indexOf(name) !== -1;
  }

  getRecipes(): Observable<Recipe[]> {
    return of(this.recipes);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  deleteRecipe(index) {
    this.recipes.splice(index, 1);
  }

  getMedicines(recipeCode: number): Observable<any[]> {
    return of(this.medicines.filter(
      elem => elem.recipeCode === recipeCode
    ));
  }

  addMedicine(medicine: Medicine) {
    this.medicines.push(medicine);
  }

  deleteMedicine(index) {
    this.medicines.splice(index, 1);
  }
}
