import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {TodoItem} from '../model/todoItem';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CurrencyConverterService {
  private apiUrl = 'http://api.nbp.pl/api/exchangerates/';

  constructor(private http: HttpClient) {
  }

  public getCurrencyRatesTable() {
    return this.http.get(this.apiUrl + 'tables/a');
  }

  public getCurrencyRate(currency: string) {
    return this.http.get(this.apiUrl + 'rates/a/' + currency);
  }
}
