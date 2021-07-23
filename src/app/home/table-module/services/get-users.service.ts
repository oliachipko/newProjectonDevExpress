import { Injectable } from '@angular/core';
import {UsersModel} from "../../../../models/users.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class GetUsersService {
  private uri = "https://jsonplaceholder.typicode.com/comments";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UsersModel[]> {
     return this.http.get<UsersModel[]>(this.uri);
  }

}
