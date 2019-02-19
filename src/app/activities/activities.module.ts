import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './activities.component';
import { ListActivitiesComponent } from './list-activities/list-activities.component';

@NgModule({
  declarations: [ActivitiesComponent, ListActivitiesComponent],
  imports: [
    CommonModule,
    ActivitiesRoutingModule
  ]
})
export class ActivitiesModule { }
