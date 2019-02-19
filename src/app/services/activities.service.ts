import { Injectable } from '@angular/core';
import { ActivitiesConst } from '../data/activities';
import { ActivityModel } from '../data/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  activitiesList: ActivityModel[];
  dailyPlanList: ActivityModel[] = [];

  constructor() { }

  public getActivities() {
    return this.activitiesList = ActivitiesConst;
  }

  public addToDailyPlanList(item: ActivityModel) {
    this.dailyPlanList.push(item);
  }

  public getPlan() {
    return this.dailyPlanList;
  }
}
