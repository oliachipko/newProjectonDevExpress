import { Component } from '@angular/core';
import {GetUsersService} from "../../services/get-users.service";
import {PhotosModel} from "../../../../../models/photos.model";
import {TodosModel} from "../../../../../models/todos.model";
import {UsersModel} from "../../../../../models/users.model";
import {HelperService} from "../../services/helper.service";
import DevExpress from "devextreme";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  datasource: PhotosModel[] | TodosModel[] | UsersModel[] = [];
  columns: Array<DevExpress.ui.dxDataGridColumn | string> = this.helperService.getEmptyColumns();
  constructor(
    private userService: GetUsersService,
    private helperService: HelperService
  ) {}

  getData(entity: string): void {
    this.userService.getData(entity).subscribe(data => {
      switch(entity) {
        case 'users':
          this.datasource = this.getDataSource(data);
          this.columns = this.helperService.getUserColumns();
          break;
        case 'todos':
          this.datasource = data;
          this.columns = this.helperService.getTodosColumns();
          break;
        case 'photos':
          this.datasource = data;
          this.columns = this.helperService.getPhotosColumns();
          break;
      }
      // if (entity === 'users') {
      //   this.datasource = this.getDataSource(data);
      //   this.columns = this.helperService.getUserColumns();
      // } else {
      //   this.datasource = data;
      // }

    });
  }

  getDataSource(data: any[]): UsersModel[] {
    return data.map(item => {
      return {
        id: item.id,
        name: item.name,
        username: item.username,
        email: item.username,
        street: item.address.street,
        city: item.address.city,
        latitude: item.address.geo.lat,
        longitude: item.address.geo.lng,
        location: 'assets/icon-earth-14.jpg',
        phone: item.phone,
        website: item.website,
        company: item.company.name,
        phrase: item.company.catchphrase,
        business: item.company.bs
      }
    })
  }

  cellClick(e: any): void {
    if (e.value !== e.data.location) {
      return;
    }
    window.open(`https://www.google.com/maps/search/?api=1&query=${e.data.latitude}%2C${e.data.longitude}`);
  }
}
