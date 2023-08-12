import { Component } from '@angular/core';
import { MessagingService } from './../../shared/messaging.service';
import { PizzaService } from 'src/app/shared/pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  message: any;
  pizzaList: any = [];
  constructor(
    private ms: MessagingService,
    private pizzaService: PizzaService
  ) {}

  ngOnInit(): void {
    this.getPizzadata();
  }

  getPizzadata() {
    this.pizzaService.getPizzadataNodeServer().subscribe(
      (data: any) => {
        this.pizzaList = data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  subscribeToNotifications() {
    const userName = prompt(
      'To subscribe to notifications, please enter your name.'
    );
    if (userName) {
      this.ms.requestPermission(userName);
      this.ms.receiveMessaging();
      this.message = this.ms.currentMessage;
    }
  }

  addToCart(item: any) {
    console.log(item);
  }
}
