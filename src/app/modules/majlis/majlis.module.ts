import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import { MajlisListComponent } from './components/majlis-list/majlis-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PublicRoutingModule } from './majlis.routing';

@NgModule({
  declarations: [ServicesComponent, MajlisListComponent, DashboardComponent],
  imports: [CommonModule, PublicRoutingModule]
})
export class MajlisModule {}
