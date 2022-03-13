import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Medicine } from 'src/app/service/data-getter.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss'],
})
export class MedicineComponent implements OnInit {

  @Input() medicine: Medicine;
  @Input() isNew: boolean;
  @Output() addMedicine = new EventEmitter();
  @Output() cancelAddingMedicine = new EventEmitter();
  title: string;


  constructor() { }

  ngOnInit() {
    if(this.isNew) {
      this.medicine = {
        name: '',
        recipeCode: null,
        dosage: '',
        form: ''
      };
      this.title = 'New Medicine';
    }
  }

  addNew() {
    if (this.isNew) {
      this.addMedicine.emit(this.medicine);
    }
  }

  cancelAdding() {
    if (this.isNew) {
      this.cancelAddingMedicine.emit();
    }
  }


}
