import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HomePageComponent } from './home-page/home-page.component';

export const firebaseConfig ={
  apiKey: "AIzaSyCqTBfVPB3YXOtmR0oWymqcWIz36cdXFrM",
    authDomain: "dating-app-1df86.firebaseapp.com",
    databaseURL: "https://dating-app-1df86.firebaseio.com",
    projectId: "dating-app-1df86",
    storageBucket: "dating-app-1df86.appspot.com",
    messagingSenderId: "1008431861795"
};

@NgModule({
 declarations: [
   AppComponent,
   HomePageComponent
 ],
 imports: [
   BrowserModule,
   AngularFireModule.initializeApp(firebaseConfig),
   AngularFireAuthModule,
   AngularFireDatabaseModule 
  ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
