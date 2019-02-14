import { WINDOW } from '@ng-toolkit/universal';
import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pitstop } from '../../interfaces/pitstop';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
@Injectable({
    providedIn: 'root'
})
export class PitstopService {
    httpOptions: Object;
    pitstops: Array<Pitstop>;
    constructor(
        @Inject(WINDOW) private window: Window,
        private http: HttpClient,
        private api: ApiService
    ) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    addPitstop(pitstop: Pitstop) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.api.post('/pitstops', pitstop, {});
    }
    getPitstops() {
        return new Observable(observer => {
            if (this.pitstops) return observer.next(this.pitstops);
            this.api.get('/pitstops', {}).subscribe(data => {
                this.pitstops = data;
                observer.next(this.pitstops);
            });
        });
    }
    getPitstopById(id) {
        return this.api.get('/pitstops/', {});
    }
    getNearPitstops(options) {
        return new Observable(observer => {
            if (this.window.localStorage.getItem('pitstops:near')) {
                observer.next(
                    JSON.parse(
                        this.window.localStorage.getItem('pitstops:near')
                    )
                );
            }
            this.api.post('/pitstops/radius/', options, {}).subscribe(data => {
                this.window.localStorage.setItem(
                    'pitstops:near',
                    JSON.stringify(data)
                );
                observer.next(data);
            });
        });
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
