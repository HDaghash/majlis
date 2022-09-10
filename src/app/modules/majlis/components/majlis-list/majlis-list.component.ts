import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { IMajlisForm } from '../majlis-form/types';

@Component({
  selector: 'app-majlis-list',
  templateUrl: './majlis-list.component.html',
  styleUrls: ['./majlis-list.component.less']
})
export class MajlisListComponent {
  showForm = new Subject<IMajlisForm | null>();

  constructor() {}

  checkAction(serviceName: string) {
    switch (serviceName) {
      case 'CRETE_MAJLIS':
        this.showForm.next(null);
        break;
    }
  }
}
