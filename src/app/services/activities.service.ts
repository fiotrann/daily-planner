import { Injectable } from '@angular/core';
import { ActivitiesConst } from '../data/activities';
import { ActivityModel } from '../data/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  activitiesList: ActivityModel[];

  constructor() { }

  public getActivities() {
    return this.activitiesList = ActivitiesConst;
  }
}
