import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WaveService } from 'src/app/wave.service';
import { Wave } from 'src/app/batery/wave.model';

@Component({
  selector: 'app-wave-list',
  templateUrl: './wave-list.component.html',
  styleUrls: ['./wave-list.component.css']
})
export class WaveListComponent implements OnInit {
  waves: Wave[];


  constructor(private _waveService: WaveService ) { }

  ngOnInit(): void {
    this.getWaves();
  }

  getWaves() {
    this._waveService.getAllWaves().subscribe(w => {
      this.waves = w.data;
    });
  }
}
