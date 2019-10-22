import { Component } from '@angular/core';


import * as firebase from 'firebase';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'livre';


  constructor(){
 
  const config = {
  apiKey: "AIzaSyCdijDhUAJPw66NSLwPiPy1PUH_UDcM8k0",
  authDomain: "book-livre.firebaseapp.com",
  databaseURL: "https://book-livre.firebaseio.com",
  projectId: "book-livre",
  storageBucket: "book-livre.appspot.com",
  messagingSenderId: "707353004966",
  appId: "1:707353004966:web:cd7436afd33a22aa4e9d67",
  measurementId: "G-J9V78NMN6J"

};
  firebase.initializeApp(config);
firebase.analytics();

  }

}
