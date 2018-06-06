import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService{
    businesses: FirebaseListObservable<Business[]>;
    categories: FirebaseListObservable<Category[]>;

    constructor(private af: AngularFireDatabase) {
        
    }

    getBusinesses() {
        this.businesses = this.af.list('/businesses') as FirebaseListObservable<Business[]>;
        return this.businesses;
    }

    getCategories() {
        this.businesses = this.af.list('/categories') as FirebaseListObservable<Category[]>;
        return this.categories;
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

export interface Category {
    $key?: string;
    name?: string; // ? means optional
}