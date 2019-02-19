import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivityModel } from 'src/app/data/activity.model';
import { ActivitiesService } from 'src/app/services/activities.service';
import { PlanModel } from 'src/app/data/plan.model';


@Component({
  selector: 'app-view-plan',
  templateUrl: './view-plan.component.html',
  styleUrls: ['./view-plan.component.css']
})
export class ViewPlanComponent implements OnInit {
  planList: ActivityModel[];
  @Input() formValues: PlanModel;
  @Output() updateActivitiesList: EventEmitter<ActivityModel> = new EventEmitter<ActivityModel>();
  @Output() reloadActivities: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit() {
    this.planList = this.activitiesService.getPlan();
  }

  deleteFromDailyPlan(item: ActivityModel) {
    this.planList = this.activitiesService.deletePlanItem(item);
    this.updateActivitiesList.emit(item);
  }

  resetPlan() {
    this.planList = this.activitiesService.clearPlan();
    this.reloadActivities.emit(true);
  }

}
