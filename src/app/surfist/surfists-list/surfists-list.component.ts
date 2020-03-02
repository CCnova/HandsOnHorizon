import { Component, OnInit } from '@angular/core';
import { SurfistService } from 'src/app/surfist.service';
import { Surfist } from '../surfist.model';

@Component({
  templateUrl: './surfists-list.component.html',
  styleUrls: ['./surfists-list.component.css']
})
export class SurfistsListComponent implements OnInit {
  surfists: Surfist[];

  constructor(private _surfistService : SurfistService) {}

  ngOnInit() {
    this.surfists = this._surfistService.getAllSurfists();
  }
}
