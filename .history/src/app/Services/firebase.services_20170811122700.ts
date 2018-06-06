import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService{
    businesses: FirebaseListObservable<Business[]>;
}

export interface Business {
    $key: string;
    company?: string; // ? means optional
    description?: string;
}