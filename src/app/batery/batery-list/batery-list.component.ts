import { Component, OnInit, Input } from '@angular/core';
import { Batery } from '../batery.model';
import { BateryService } from 'src/app/batery.service';

@Component({
  selector: 'app-batery-list',
  templateUrl: './batery-list.component.html',
  styleUrls: ['./batery-list.component.css']
})
export class BateryListComponent implements OnInit {
  bateries: Batery[];
  wavesId: number[][] = [];

  constructor(private _bateryServ: BateryService) {}

  ngOnInit() {
    this.getBateries();
  }

  getBateries() {
    this._bateryServ.getAllBateries().subscribe(paginationData => {
      this.bateries = paginationData;

      for(let bat of this.bateries) {
        this.wavesId.push(bat.wavesId.split(',').map(x=>+x));
      }

      console.log(this.bateries);
    });
  }

  // bateriesChanged() {
  //   this.bateries = this._bateryServ.updateBateries();

  //   console.log(this.bateries);
  // }

  updateBateries(batId: number) {
    this.getBateries();
  }
}
