import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDividerModule,
  MatInputModule,
} from '@angular/material';
import { MatToolbarModule} from '@angular/material';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RouterModule} from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { TodoItemManagerComponent } from './todo-list/todo-item-manager/todo-item-manager.component';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { MatSlideToggleModule } from  '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemManagerComponent,
    CurrencyConverterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatListModule,
    MatDividerModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    TextFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatMenuModule,
    RouterModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
