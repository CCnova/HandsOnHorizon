import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wave } from './batery/wave.model';
import { Observable } from 'rxjs';
import { WaveRes } from './wave/wave-res.model';

@Injectable({
  providedIn: 'root'
})
export class WaveService {
  private wavesUrl: string = 'http://127.0.0.1:8000/api/waves';

  constructor(private http: HttpClient) { }

  getAllWaves(): Observable<WaveRes> {
    return this.http.get<WaveRes>(this.wavesUrl);
  }

  getWaveById(waveId: number): Observable<Wave> {
    return this.http.get<Wave>(this.wavesUrl + `/${waveId}`);
  }

  storeNewWave(newWaveParticipants: string, newWaveScores: string): Observable<number> {
    return this.http.post<number>(this.wavesUrl, {
      scores: newWaveScores,
      participants: newWaveParticipants
    });
  }
}
