import { Injectable } from '@angular/core';
import { PageLayout } from '../models/PageLayout';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PagelayoutService {

  subscribers: BehaviorSubject<PageLayout> = new BehaviorSubject<PageLayout>(null);

  constructor() {
    const u = localStorage.getItem('user');
    const page = JSON.parse(u);
   }

}
