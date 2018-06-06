import { Component, OnInit } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FirebaseService } from '../services/firebase.services';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
   providers: [FirebaseService]
})
export class HomePageComponent {
	data: Data[];
gender: Gender[];
appState: string;
  constructor(private _firebaseService: FirebaseService) {
}


  ngOnInit() {
   this.appState = 'default'
    this._firebaseService.getData().subscribe(data => {
     this.data = data;
   });

   this._firebaseService.getGender().subscribe(gender => {
     this.gender = gender;
   });

}
addLike(UserId, likeValue) {
    likeValue += 1;
    this._firebaseService.increment(UserId, likeValue);
  }


filterCategory(gender) {
  this._firebaseService.getData(gender).subscribe(data=> {
    this.data = data;
  })
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
  likes?: number;
}
export interface Gender {
  $key?: string;
  name?: string;
}

