import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';

const appRoutes: Routes = [
  { path: 'converter', component: CurrencyConverterComponent },
  { path: 'todo', component: TodoListComponent },
  { path: '', component: TodoListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
