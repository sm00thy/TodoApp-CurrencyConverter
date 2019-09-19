import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit, OnChanges {

  isItemChecked = false;
  items = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  itemRefresh(e) {
    this.items.push(e);
  }

  deleteItem(element) {
     this.items = this.items.filter(x => x !== element)
  }

}
