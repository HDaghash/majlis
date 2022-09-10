import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less']
})
export class ServicesComponent implements OnInit {
  @Output() onAction = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  startService(serviceName: string) {
    this.onAction.emit(serviceName);
  }
}
