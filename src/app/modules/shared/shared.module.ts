import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, NzButtonModule, NzGridModule, NzIconModule],
  exports: [CommonModule, FormsModule, NzButtonModule, NzGridModule, NzIconModule]
})
export class SharedModule {}
