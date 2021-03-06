import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from './Services/firebase.services';
import { NgIf } from '@angular/common';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  businesses: Business[];
  categories: Category[];
  appState: string;
  activeKey: string;


  constructor(private _firebaseService: FirebaseService) {

  }

  onSubmit(user) {
    console.log(user);

  }

  ngOnInit() {

    this.appState = 'default';

    this._firebaseService.getBusinesses().subscribe(businesses => {
      this.businesses = businesses;
    });

    this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  filterCategory(category) {
    this._firebaseService.getBusinesses(category).subscribe(businesses => {
      this.businesses = businesses;
    })
  }

  changeState(state, key) {
    if (key) {
      this.activeKey = key;
    }
    this.appState = state;
  }

  addBusiness(
    company: string,
    category: string,
    years_in_business: number,
    description: string,
    phone: string,
    email: string,
    street_address: string,
    city: string,
    state: string,
    zipcode: string
  ) {

    var created_at = new Date().toString();

    var newBusiness = {
      company: company,
      category: category,
      years_in_business: years_in_business,
      description: description,
      phone: phone,
      email: email,
      street_address: street_address,
      city: city,
      state: state,
      zipcode: zipcode,
      created_at: created_at
    }
    console.log(newBusiness);
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