import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { Hostel } from '../../interfaces/hostel';

@Injectable({
    providedIn: 'root'
})
export class HospitalityService {
    hostels: Array<Hostel>;
    constructor(private apiService: ApiService) {}
    getHostels() {
        return new Observable(observer => {
            if (this.hostels) return observer.next(this.hostels);
            this.apiService
                .post('/hospitality', {}, {})
                .subscribe((hostels: Array<Hostel>) => {
                    hostels.map(hostel => {
                        hostel.rating = Number(hostel.rating);
                        return hostel;
                    });
                    observer.next(hostels);
                });
        });
    }
}
