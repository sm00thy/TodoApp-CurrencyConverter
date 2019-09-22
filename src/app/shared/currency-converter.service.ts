import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
