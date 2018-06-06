import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule }   from '@angular/forms';

export const firebaseConfig = {
  apiKey: "AIzaSyDYQ2OOGHtFceCJShiUVeBtuAEBHqN0HEY",
  authDomain: "business-4bbe7.firebaseapp.com",
  databaseURL: "https://business-4bbe7.firebaseio.com",
  projectId: "business-4bbe7",
  storageBucket: "business-4bbe7.appspot.com",
  messagingSenderId: "535533973686"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
