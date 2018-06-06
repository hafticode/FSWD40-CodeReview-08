import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
@Injectable()
export class FirebaseService{
  data: FirebaseListObservable<Data[]>;
  gender: FirebaseListObservable<Gender[]>;
  constructor(private af: AngularFireDatabase) {
    
  }
 getData(gender: string = null) {
      if (gender != null) {
          this.data = this.af.list('/data', {
              query: {
                  orderByChild: 'gender',
                  equalTo: gender
              }
          }) as FirebaseListObservable<Data[]>;
      } else {
          this.data= this.af.list('/data') as FirebaseListObservable<Data[]>;
      }
      return this.data;
  }
  getGender() {
      this.gender= this.af.list('/gender') as FirebaseListObservable<Gender[]>;
      return this.gender;
  }

   increment(UserId, likeValue): void {
        this.af.object('/data/' + UserId).update({likes: likeValue});
    }
 
}
export interface Data {
  $key?: string;
  name?: string; // ? means optional
  surname?: string;
  gender: string;
  age?: number;
  inrelationship?: boolean;
  image?: string;
}
export interface Gender {
  $key?: string;
  name?: string;
}