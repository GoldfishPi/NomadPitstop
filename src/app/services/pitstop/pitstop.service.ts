import { WINDOW } from '@ng-toolkit/universal';
import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pitstop } from '../../interfaces/pitstop';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class PitstopService {
    httpOptions: Object;
    pitstops: Array<Pitstop>;
    constructor(
        @Inject(WINDOW) private window: Window,
        private http: HttpClient
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
        return this.http
            .post<Pitstop>(
                environment.serverUrl + '/pitstops',
                pitstop,
                httpOptions
            )
            .pipe(map((res: any) => res));
    }
    getPitstops() {
        return new Observable(observer => {
            if (this.pitstops) return observer.next(this.pitstops);
            this.http
                .get<Array<Pitstop>>(
                    environment.serverUrl + '/pitstops',
                    this.httpOptions
                )
                .pipe(map((res: any) => res))
                .subscribe(data => {
                    this.pitstops = data;
                    observer.next(this.pitstops);
                });
        });
    }
    getPitstopById(id) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http
            .get<Pitstop>(
                environment.serverUrl + '/pitstops/' + id,
                httpOptions
            )
            .pipe(map((res: any) => res));
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
            this.http
                .post<Array<Pitstop>>(
                    environment.serverUrl + '/pitstops/radius/',
                    options,
                    this.httpOptions
                )
                .pipe(map(res => res))
                .subscribe(data => {
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
