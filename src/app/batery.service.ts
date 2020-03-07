import { Injectable, OnInit } from '@angular/core';

import { BATERIES_DATA } from './batery/mock-bateries';

import { Batery } from './batery/batery.model';
import { Wave } from './batery/wave.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BateryService implements OnInit {
  private bateriesUrl = 'http://127.0.0.1:8000/api/bateries';
  initialBateries: Batery[];
  initialWaves: Wave[];

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  getAllBateries(): Observable<Batery[]> {
    return this.http.get<Batery[]>(this.bateriesUrl);
  }

  registerNewWave(bateryId: number,part: string, scores: string) {
    const newWaveParticipants = part.split(',');
    const newWaveScores = scores.split(',').map(x => +x);

    const newWave: Wave = {
      id: this.initialWaves[this.initialWaves.length - 1].id + 1,
      surfists: newWaveParticipants,
      scores: newWaveScores
    }

    for(let bat of BATERIES_DATA) {
      if(bat.id === bateryId) {
        bat.waves.push(newWave);
      }
    }

    alert('Onda Registrada com sucesso!');
  }

  registerNewScore(bateryId: number, waveId: number, surfistName: string, score: number) {
    for(let i = 0; i < this.initialBateries.length; i++) {
      if(this.initialBateries[i].id === bateryId) {
        for(let j = 0; j < this.initialBateries[i].waves.length; j++) {
          if(this.initialBateries[i].waves[j].id === waveId) {
            this.initialBateries[i].waves[j].surfists.push(surfistName);
            this.initialBateries[i].waves[j].scores.push(score);

            console.log(this.initialBateries);
          }
        }
      }
    }
  }

  updateBateries() {
    return this.initialBateries;
  }
}

