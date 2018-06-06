import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService{
    businesses: FirebaseListObservable<Business[]>;

    constructor(private af: AngularFireDatabase) {
        
    }
    getBusinesses() {
        this.businesses = this.af.database.list('');
    }
}

export interface Business {
    $key?: string;
    company?: string; // ? means optional
    description?: string;
    category: string;
    years_in_business?: number;
    street_address?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    phone?: string;
    email?: string;
    created_at: string;
}