import { Injectable, OnInit } from '@angular/core';

import { BATERIES_DATA } from './batery/mock-bateries';
import { WAVES_DATA } from './batery/mock-waves';

import { Batery } from './batery/batery.model';
import { Wave } from './batery/wave.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BateryService implements OnInit {
  initialBateries: Batery[] = BATERIES_DATA;
  initialWaves: Wave[] = WAVES_DATA;
  constructor() { }

  ngOnInit() {

  }

  getAllBateries(): Observable<Batery[]> {
    return of(BATERIES_DATA);
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

