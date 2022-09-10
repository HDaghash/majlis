import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IMajlisForm } from '../majlis-form/types';
import { CITIES, DISTRICTS } from '../majlis-form/config';
import { DEMO_DATA } from './demo-data';
@Component({
  selector: 'app-majlis-list',
  templateUrl: './majlis-list.component.html',
  styleUrls: ['./majlis-list.component.less']
})
export class MajlisListComponent implements OnInit {
  readonly CITIES = CITIES;
  readonly DISTRICTS = DISTRICTS;
  showForm = new Subject<IMajlisForm | null>();
  items: IMajlisForm[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [...DEMO_DATA];
  }

  checkAction(serviceName: string) {
    switch (serviceName) {
      case 'CRETE_MAJLIS':
        this.showForm.next(null);
        break;
    }
  }

  formSubmitted(event: IMajlisForm) {
    console.log(event);
    this.items = [...this.items, event];
  }
}
