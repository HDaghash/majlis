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
  displayItems: IMajlisForm[] = [];
  pageSize = 3;
  constructor() {}

  ngOnInit() {
    this.items = [...DEMO_DATA];
    this.displayItems = this.items.slice(0, this.pageSize);
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
    this.items = [...this.items, { id: this.items.length + 1, ...event }];
  }

  delete(id: number | undefined) {
    if (id) {
      const newItems = this.items.filter(item => item.id !== id);
      this.items = [...newItems];
      this.displayItems = this.items.slice(0, this.pageSize);
    }
  }

  onPageChange(page: number) {
    const index = page !== 1 ? page * this.pageSize - this.pageSize : 0;
    this.displayItems = this.items.slice(index, this.pageSize * page);
  }
}
