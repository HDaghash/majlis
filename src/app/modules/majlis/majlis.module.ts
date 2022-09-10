import { NgModule } from '@angular/core';
import { ServicesComponent } from './components/services/services.component';
import { MajlisListComponent } from './components/majlis-list/majlis-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MajlisRoutingModule } from './majlis.routing';
import { SharedModule } from '../shared/shared.module';
import { MajlisFormComponent } from './components/majlis-form/majlis-form.component';

@NgModule({
  declarations: [ServicesComponent, MajlisListComponent, DashboardComponent, MajlisFormComponent],
  imports: [MajlisRoutingModule, SharedModule]
})
export class MajlisModule {}
