import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {TodoItem} from '../../model/todoItem';
import {NgForm} from '@angular/forms';
import {TodoService} from '../../shared/todo.service';

@Component({
  selector: 'app-todo-item-manager',
  templateUrl: './todo-item-manager.component.html',
  styleUrls: ['./todo-item-manager.component.scss']
})
export class TodoItemManagerComponent implements OnInit {

  @Output() itemRefresh = new EventEmitter<TodoItem>();

  constructor(private todoService: TodoService) {}

  ngOnInit() {
  }

  create(form: NgForm) {
    const formValue = {
      text: form.value.newTodo,
    };
    form.reset();
    this.itemRefresh.emit(formValue);
  }
}
