import {Injectable} from '@angular/core';
import {Menuitem} from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  sideMenuItems: Menuitem[] = [
    new Menuitem('Photos', '#',
      [
         new Menuitem('All Photos', '/photos', [], false),
      ], false, '', 'photo_library'),

    new Menuitem('Dashboard', 'table', [], false, 'assets/icons/svg/reports.svg'),
  ];


  constructor() {
  }


}
