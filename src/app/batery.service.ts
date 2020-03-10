import { Injectable, OnInit } from '@angular/core';

import { Batery } from './batery/batery.model';
import { Wave } from './batery/wave.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WaveService } from './wave.service';



@Injectable({
  providedIn: 'root'
})
export class BateryService implements OnInit {
  private bateriesUrl = 'http://127.0.0.1:8000/api/bateries';
  initialBateries: Batery[];
  initialWaves: Wave[];

  constructor(private http: HttpClient, private _waveService: WaveService) { }

  ngOnInit() {
    this.getInitialBateries();
  }

  getInitialBateries() {
    this.http.get<Batery[]>(this.bateriesUrl).subscribe(paginationData => {
      this.initialBateries = paginationData;
    });
  }

  getAllBateries(): Observable<Batery[]> {
    return this.http.get<Batery[]>(this.bateriesUrl);
  }

  getBateryById(batId: number): Observable<Batery> {
    return this.http.get<Batery>(this.bateriesUrl + `/${batId}`);
  }

  registerNewWave(bateryId: number,part: string, scores: string) {
    this._waveService.storeNewWave(part, scores).subscribe(returnedId => {
      this.getBateryById(bateryId).subscribe(bateryInitState => {
        let newWaveIds = '';
        if(bateryInitState.wavesId != undefined) {
          newWaveIds = bateryInitState.wavesId + ', ';
        }
        newWaveIds = newWaveIds + `${returnedId}`;

        console.log(returnedId);

        const updatedBaterie = {
          _id: bateryInitState.id,
          wavesId: newWaveIds,
          winner: bateryInitState.winner
        }
        // console.log(updatedBaterie);
        // console.log(newWaveIds);
         this.updateBaterie(bateryId, updatedBaterie)
      });
    });

    alert('Onda Registrada com sucesso!');
  }

  // registerNewScore(bateryId: number, waveId: number, surfistName: string, score: number) {
  //   for(let i = 0; i < this.initialBateries.length; i++) {
  //     if(this.initialBateries[i].id === bateryId) {
  //       for(let j = 0; j < this.initialBateries[i].waves.length; j++) {
  //         if(this.initialBateries[i].waves[j].id === waveId) {
  //           this.initialBateries[i].waves[j].surfists.push(surfistName);
  //           this.initialBateries[i].waves[j].scores.push(score);

  //           console.log(this.initialBateries);
  //         }
  //       }
  //     }
  //   }
  // }

  updateBaterie(baterieId: number, newData): Observable<Batery> {
    return this.http.put<Batery>(this.bateriesUrl + `/${baterieId}`, newData)
  }
}

