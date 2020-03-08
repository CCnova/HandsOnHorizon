import { Component, OnInit, Input } from '@angular/core';
import { WaveService } from 'src/app/wave.service';
import { Wave } from '../wave.model';

@Component({
  selector: 'app-wave-list',
  templateUrl: './wave-list.component.html',
  styleUrls: ['./wave-list.component.css']
})
export class WaveListComponent implements OnInit {
  private wavesUrl: string = 'http://127.0.0.1:8000/api/waves';
  wavesList: Wave[] = [];
  @Input() showWavesId: number[];

  constructor(private _waveService: WaveService) { }

  ngOnInit(): void {
    this.getWaves();
  }

  getWaves() {
    this._waveService.getAllWaves().subscribe(paginationData => {
      for(let id of this.showWavesId) {
        for(let wave of paginationData.data) {
          if(wave.id === id) {
            this.wavesList.push(wave);
          }
        }
      }
    });
  }

}
