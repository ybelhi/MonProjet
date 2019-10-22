import { Injectable } from '@angular/core';
import { Book } from '../model/book.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import Datasnapshot = firebase.database.DataSnapshot;


@Injectable()
export class BooksService {



books : Book[] = [];

bookSubject = new Subject <Book[]>();

emitBooks(){
  this.bookSubject.next(this.books);
           }

saveBooks(){
  firebase.database().ref('/books').set(this.books);
}
getBooks(){
  firebase.database().ref('/books').on('value',(data : Datasnapshot)=> {
    this.books = data.val() ? data.val() : [];
    this.emitBooks;
  }
  );
}

getSingleBook(id : number){
  return new Promise((resolve,reject)=>{
firebase.database().ref('/books/'+id).once('value').then(
  (data: Datasnapshot)=>{
    resolve(data.val());
  },(error)=>{
    reject(error);
  }
  );
  }
  );

}

createnewBook(newBook: Book){
  this.books.push(newBook)
  this.saveBooks();
  this.emitBooks();
}

removeBook(book : Book){
const bookIndexToRemove = this.books.findIndex(
  (bookE1)=>{
    if(bookE1 === book){
      return true;
    }
  }

);
this.books.splice(bookIndexToRemove,1);
this.saveBooks();
this.emitBooks();
}

constructor() {

  this.getBooks();

}






}


