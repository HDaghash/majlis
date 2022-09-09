import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MajlisListComponent } from '../majlis/components/majlis-list/majlis-list.component';

const routes: Routes = [
  {
    path: 'majlis',
    component: MajlisListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MajlisRoutingModule {}
