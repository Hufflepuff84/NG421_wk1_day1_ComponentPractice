import { Component, OnInit } from '@angular/core';
import orders from '../orders';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  orders: any [] = [];
  constructor() { }

  ngOnInit() {
    this.orders = orders;
  }

}
