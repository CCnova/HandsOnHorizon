import { Component, OnInit } from '@angular/core';
import { Batery } from '../batery.model';

@Component({
  selector: 'app-batery-list',
  templateUrl: './batery-list.component.html',
  styleUrls: ['./batery-list.component.css']
})
export class BateryListComponent implements OnInit {
  bateries: Batery[];

  constructor() {}

  ngOnInit() {}
}
