import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

const appRoutes: Routes = [
  { path: 'converter', component: CurrencyConverterComponent, canActivate: [AuthGuard]  },
  { path: 'todo', component: TodoListComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
