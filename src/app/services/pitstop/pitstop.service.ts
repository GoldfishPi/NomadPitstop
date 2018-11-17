import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pitstop } from '../../interfaces/pitstop';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PitstopService {
  constructor(private http: HttpClient) {}

  addPitstop(pitstop: Pitstop) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http
      .post<Pitstop>(environment.serverUrl + '/pitstops', pitstop, httpOptions)
      .pipe(map((res: any) => res));
  }

  getPitstops() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http
        .get<Array<Pitstop>>(environment.serverUrl + '/pitstops',httpOptions)
        .pipe(map((res: any) => res));
  }
  internetWords(val) {
    let out: string;
    switch (val) {
      case '0':
        out = 'Awful';
        break;

      case '1':
        out = 'Very Bad';
        break;

      case '2':
        out = 'bad';
        break;

      case '3':
        out = 'Good';
        break;

      case '4':
        out = 'very good';
        break;
      default:
        out = 'Excellent';
        break;
    }
    return out;
  }
}
