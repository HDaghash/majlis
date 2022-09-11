import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CITIES, DISTRICTS } from '../majlis-form/config';
import { ILookupItem } from 'app/modules/majlis/components/majlis-form/types';
import { Subscription } from 'rxjs';
import { FormService } from 'app/services/forms.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less']
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() onFilter = new EventEmitter();
  @Output() onReset = new EventEmitter();

  subscription = new Subscription();
  cities = [...CITIES];
  districts: ILookupItem[] = [];
  form = this.formBuilder.group({
    city: [null],
    district: [null],
    status: [true]
  });

  constructor(private formBuilder: FormBuilder, private formService: FormService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.form.controls.city.valueChanges.subscribe(id => {
        const target = DISTRICTS.find(item => item.cityId === id);
        if (target) {
          this.form.controls.district.reset();
          this.districts = [...target.items];
        }
      })
    );
  }

  submit() {
    const formData = this.formService.submitData(this.form.controls);
    this.onFilter.emit(formData);
  }

  reset() {
    this.onReset.emit();
    this.form.reset({ status: true });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
