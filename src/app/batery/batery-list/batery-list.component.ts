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
  }

  getBateries() {
    this._bateryServ.getAllBateries().subscribe(paginationData => {
      this.bateries = paginationData.data;
      console.log(this.bateries);
    });
  }

  bateriesChanged() {
    this.bateries = this._bateryServ.updateBateries();

    console.log(this.bateries);
  }
}
