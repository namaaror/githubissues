import { Component, OnInit } from '@angular/core';
import { ApiBaseService } from '../api-base.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {
  tableData = [];
  tableCols = [
    { field: 'title', header: 'Issues' }
  ];
  selectedRows = [];
  constructor(private api: ApiBaseService) { }

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    this.api.getData(
      `https://api.github.com/search/issues?q=repo:angular/angular/node+type:issue+state:open`)
      .subscribe(res => {
        this.tableData = res.items;
      });
  }

  onRowSelect(item: any) {}

}
