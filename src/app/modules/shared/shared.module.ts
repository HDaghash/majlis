import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzCardModule,
    NzTagModule,
    NzToolTipModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzCardModule,
    NzTagModule,
    NzToolTipModule
  ]
})
export class SharedModule {}
