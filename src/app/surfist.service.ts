import { Injectable } from '@angular/core';
import { Surfist } from './surfist/surfist.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurfistRes } from './surfist/surfist-res.model';

@Injectable({
  providedIn: 'root'
})
export class SurfistService {
  private surfistsUrl: string = 'http://127.0.0.1:8000/api/surfists';
  surfists: Surfist[];

  constructor(private http: HttpClient) { }

  getAllSurfists(): Observable<SurfistRes> {
    return this.http.get<SurfistRes>(this.surfistsUrl);
  }

  registerSurfist(sName: string) {
    // const newSurfist: Surfist = {id: this.surfists[this.surfists.length - 1].id + 1, name: sName, points: []};

    // this.surfists.push(newSurfist);

    // console.log(this.surfists);
  }
}
