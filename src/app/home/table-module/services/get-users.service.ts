import { Injectable } from '@angular/core';
import {UsersModel} from "../../../../models/users.model";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {PhotosModel} from "../../../../models/photos.model";
import {TodosModel} from "../../../../models/todos.model";
import {NewUserModel} from "../../../../models/newUser.model";

@Injectable()
export class GetUsersService {

  private uri = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) {}

  getData(entity: string): Observable<UsersModel[] | PhotosModel[] | TodosModel[]> {
    return this.http.get<UsersModel[] | PhotosModel[] | TodosModel[]>(this.uri + entity);
  }

}
