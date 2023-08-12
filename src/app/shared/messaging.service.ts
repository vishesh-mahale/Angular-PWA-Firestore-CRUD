import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  currentMessage = new BehaviorSubject<any>(null);
  constructor(
    private afs: AngularFirestore,
    private afa: AngularFireAuth,
    private afm: AngularFireMessaging
  ) {}

  requestPermission(name: any) {
    this.afm.requestToken.subscribe(
      (token) => {
        console.log(token);
        this.updateToken(token, name);
        alert('Thank you for subscribing to the notification.');
      },
      (err) => {
        console.log('Unable to get user permission', err);
      }
    );
  }

  updateToken(token: any, user: any) {
    this.afa.authState.subscribe(() => {
      let data = { user: user, token: token };
      this.afs.collection('tokens/').add(data);
    });
  }

  receiveMessaging() {
    this.afm.messages.subscribe((payload) => {
      console.log('new message received', payload);
      this.currentMessage.next(payload);
    });
  }
}
