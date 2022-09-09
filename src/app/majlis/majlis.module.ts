import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import { MajlisListComponent } from './components/majlis-list/majlis-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ServicesComponent, MajlisListComponent, DashboardComponent, MainLayoutComponent]
})
export class MajlisModule {}
