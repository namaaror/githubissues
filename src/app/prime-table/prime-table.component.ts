import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prime-table',
  templateUrl: './prime-table.component.html',
  styleUrls: ['./prime-table.component.css']
})
export class PrimeTableComponent implements OnInit {
  @Input() cols: any;
  @Input() tableData: any;
  @Input() isPagination = false;
  @Input() rows = 10;
  @Input() showBackBtn = true;
  @Output() backClicked = new EventEmitter();

  constructor() { }

  ngOnInit() { }
}
