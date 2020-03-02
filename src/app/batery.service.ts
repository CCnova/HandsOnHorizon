import { Injectable } from '@angular/core';
import { BATERIES_DATA } from './batery/mock-bateries';

@Injectable({
  providedIn: 'root'
})
export class BateryService {

  constructor() { }

  getAllBateries() {
    return BATERIES_DATA;
  }
}
