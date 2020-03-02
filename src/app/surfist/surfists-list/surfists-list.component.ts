import { Component, OnInit } from '@angular/core';
import { SurfistService } from 'src/app/surfist.service';

@Component({
  templateUrl: './surfists-list.component.html',
  styleUrls: ['./surfists-list.component.css']
})
export class SurfistsListComponent implements OnInit {


  constructor(private _surfistService : SurfistServiceService) {}

  ngOnInit() {

  }
}
