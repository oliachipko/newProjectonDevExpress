import { Injectable } from '@angular/core';
import DevExpress from "devextreme";

@Injectable()
export class HelperService {

  constructor() {
  }

  getUserColumns(): Array<DevExpress.ui.dxDataGridColumn | string> {
    return [
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'id',
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'name',
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'username',
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'email',
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'street',
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'city',
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'location',
        cellTemplate: 'location'
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'phone',
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'latitude',
        visible: false
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'longitude',
        visible: false
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'website',
        cellTemplate: 'website'
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'company',
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'phrase',
        visible: false
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'business',
      },
    ]
  };

  getTodosColumns(): Array<DevExpress.ui.dxDataGridColumn | string> {
    return [
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'userId',
        width: 80,
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'id',
        width: 80,
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'title',
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'completed',
        cellTemplate: 'completed',
        width: 150,
      },
    ]
  };

  getPhotosColumns(): Array<DevExpress.ui.dxDataGridColumn | string> {
    return [
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'albumId',
        width: 80
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'id',
        width: 80
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'title',
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'url',
        cellTemplate: 'url',
        width: 200,
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: 'thumbnailUrl',
        cellTemplate: 'thumbnailUrl',
        width: 200,
      }
    ]
  }

  getEmptyColumns(): Array<DevExpress.ui.dxDataGridColumn | string> {
    return [
      {
        allowEditing: false,
        allowResizing: false,
        dataField: '',
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: ''
      },
      {
        allowEditing: false,
        allowResizing: false,
        dataField: ''
      }

    ]
  }
}


