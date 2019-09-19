import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {TodoService} from '../shared/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit, OnChanges {

  isItemChecked = false;
  items = [];

  constructor(private itemsSvc: TodoService) {
  }

  ngOnInit() {
    // this.itemsSvc.getItems().subscribe(
    //   (data) => {for (const key in data) {
    //   if (data.hasOwnProperty(key)) {
    //     const element = {
    //       id: data[key].id,
    //       text: data[key].text
    //     };
    //     this.items.push(element);
    //   }
    //   }
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  itemRefresh(e) {
    this.items.push(e);
  }

  deleteItem(element) {
     this.items = this.items.filter(x => x !== element)
    // this.todoService.deleteItem(element.id).subscribe(),
    //   error => console.log(error);
  }

}
