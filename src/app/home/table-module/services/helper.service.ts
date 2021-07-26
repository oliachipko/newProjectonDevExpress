import { Injectable } from '@angular/core';
import {UsersModel} from "../../../../models/users.model";
import {PhotosModel} from "../../../../models/photos.model";
import {TodosModel} from "../../../../models/todos.model";

@Injectable()
export class HelperService {

  constructor() { }

  getColumns(data: UsersModel[] | PhotosModel[] | TodosModel[]) {
    return Object.keys(data[0]);
  }

}
