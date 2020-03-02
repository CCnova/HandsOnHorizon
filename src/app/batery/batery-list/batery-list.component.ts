import { Component, OnInit } from '@angular/core';
import { Batery } from '../batery.model';
import { BateryService } from 'src/app/batery.service';

@Component({
  selector: 'app-batery-list',
  templateUrl: './batery-list.component.html',
  styleUrls: ['./batery-list.component.css']
})
export class BateryListComponent implements OnInit {
  bateries: Batery[];

  constructor(private _bateryServ: BateryService) {}

  ngOnInit() {
    this.getBateries();
    console.log(this.bateries);
  }

  getBateries() {
    this.bateries = this._bateryServ.getAllBateries();
  }
}
