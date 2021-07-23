import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from "./components/table/table.component";
import {GetUsersService} from "./services/get-users.service";
import {DxDataGridModule} from "devextreme-angular";



@NgModule({
  declarations: [TableComponent],
  exports: [
    TableComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule
  ],
  providers: [GetUsersService]
})
export class TableModule { }
