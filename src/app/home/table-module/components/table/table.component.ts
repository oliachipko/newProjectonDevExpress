import {Component, OnInit} from '@angular/core';
import { UsersModel} from "../../../../../models/users.model";
import {GetUsersService} from "../../services/get-users.service";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users!: UsersModel[];
  constructor(private userService: GetUsersService ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.users = data);
  }
}
