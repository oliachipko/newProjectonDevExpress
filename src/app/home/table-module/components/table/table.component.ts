import {Component, OnInit} from '@angular/core';
import {GetUsersService} from "../../services/get-users.service";
import {PhotosModel} from "../../../../../models/photos.model";
import {TodosModel} from "../../../../../models/todos.model";
import {UsersModel} from "../../../../../models/users.model";
import {HelperService} from "../../services/helper.service";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  datasource: PhotosModel[] | TodosModel[] | UsersModel[] = [];
  numberOfTable = 0;
  columns: any[] = [];
  constructor(
    private userService: GetUsersService,
    private helperService: HelperService
  ) {}

  getData(entity: string): void {
    this.userService.getData(entity).subscribe(data => {
      if (entity === 'users') {
        this.datasource = this.getDataSource(data);
      } else {
        this.datasource = data;
      }
      this.columns = this.helperService.getColumns(this.datasource);
    });
  }

  getDataSource(data: any[]) {
    return data.map(item => {
      return {
        id: item.id,
        name: item.name,
        username: item.username,
        email: item.username,
        street: item.address.street,
        city: item.address.city,
        location: 'assets/icon-earth-14.jpg',
        phone: item.phone,
        website: item.website,
        companyname: item.company.name,
        catchphrase: item.company.catchphrase,
        bs: item.company.bs
      }
    })
  }

  cellClick(e: any) {
    if (e.value !== e.data.location) {
      return;
    }
    window.open('https://www.google.com/maps/search/?api=1&query='+e.data.city);
  }

  isAdditionalAttributeRequired(field: string): boolean {
    return ['completed', 'url', 'thumbnailUrl', 'location'].some(value => value === field);
  }

}
