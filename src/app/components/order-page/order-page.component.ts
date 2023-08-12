import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/shared/pizza.service';
import { Item } from 'src/app/model/items';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent implements OnInit {
  itemList: Item[] = [];
  itemObj: Item = {
    id: '',
    vegetarian: '',
    name: '',
    price: '',
    description: '',
  };
  id: string = '';
  vegetarian: string = '';
  name: string = '';
  price: string = '';
  description: string = '';

  veganTypes = this.pizzaService.vegan_types;
  vegPizzas = this.pizzaService.veg_pizzas;
  nonVegPizzas = this.pizzaService.non_veg_pizzas;

  constructor(private pizzaService: PizzaService) {}
  ngOnInit(): void {
    this.getAllItems();
  }

  //get all items
  getAllItems() {
    this.pizzaService.getAllItems().subscribe(
      (res) => {
        this.itemList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });

        console.log(this.itemList);
      },
      (err) => {
        alert('error while fetching');
      }
    );
  }

  //reset form
  resetForm() {
    this.id = '';
    this.vegetarian = '';
    this.name = '';
    this.price = '';
    this.description = '';
  }

  //add item
  addItem(from: any) {
    if (
      this.vegetarian == '' ||
      this.name == '' ||
      this.price == '' ||
      this.description == ''
    ) {
      alert('Fill all input fields');
    } else {
      this.itemObj.id = from == 'add' ? '' : this.id;
      this.itemObj.vegetarian = this.vegetarian;
      this.itemObj.name = this.name;
      this.itemObj.price = this.price;
      this.itemObj.description = this.description;

      if (from == 'add') {
        this.pizzaService.addItem(this.itemObj);
      } else {
        this.pizzaService.updateItem(this.itemObj);
      }
      this.resetForm();
    }
  }

  //update item
  updateItem(item: Item) {
    this.id = item.id;
    this.vegetarian = item.vegetarian;
    this.name = item.name;
    this.price = item.price;
    this.description = item.description;
  }

  //delete item
  deleteItem(item: Item) {
    this.pizzaService.deleteItem(item);
  }
}
