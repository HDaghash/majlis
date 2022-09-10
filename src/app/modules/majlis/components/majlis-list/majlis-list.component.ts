import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IMajlisForm } from '../majlis-form/types';
import { CITIES, DISTRICTS } from '../majlis-form/config';
import { DEMO_DATA } from './demo-data';
import { NzMessageService } from 'ng-zorro-antd/message';
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
  pageSize = 6;
  currentPage = 1;

  constructor(private message: NzMessageService) {}

  ngOnInit() {
    this.items = [...DEMO_DATA];
    this.onPageChange(1);
  }

  checkAction(serviceName: string) {
    switch (serviceName) {
      case 'CRETE_MAJLIS':
        this.showForm.next(null);
        break;
    }
  }

  formSubmitted(event: IMajlisForm) {
    const { formType, ...rest } = event;

    if (formType === 'add') {
      this.items = [...this.items, { ...rest, id: this.items.length + 1 }];
    }

    if (formType === 'edit') {
      const others = this.items.filter(item => item.id !== event.id);
      this.items = [...others, rest].sort((a, b) => (a.id || 0) - (b.id || 0));
    }

    this.onPageChange(1);
  }

  delete(id: number | undefined) {
    if (id) {
      const newItems = this.items.filter(item => item.id !== id);
      this.items = [...newItems];
      this.onPageChange(1);
      this.message.success('تم الحذف بنجاح');
    }
  }

  edit(id: number | undefined) {
    if (id) {
      const target = this.items.find(item => item.id === id);
      if (target) {
        this.showForm.next(target);
      }
    }
  }

  onPageChange(page: number) {
    const index = page !== 1 ? page * this.pageSize - this.pageSize : 0;
    this.displayItems = this.items.slice(index, this.pageSize * page);
    this.currentPage = page;
  }
}
