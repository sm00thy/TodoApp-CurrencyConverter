import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from '../shared/currency-converter.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})

export class CurrencyConverterComponent implements OnInit {

  currencies: any[] = [];
  currencyFrom: string;
  currencyFromObj: any;
  currencyToObj: any;
  currencyTo: string;
  convertedValue: any;
  amount: number;
  currencyTableData: any;
  displayedColumns: string[] = ['currencyCode', 'name', 'midRate'];
  dataSource = new MatTableDataSource(this.currencyTableData);
  formControl = new FormControl();
  filteredCurrencies: Observable<string[]>;

  constructor(private converterService: CurrencyConverterService) { }

  ngOnInit() {
    this.getTableData();
    this.filteredCurrencies = this.formControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.currencies.filter(option =>
        option.code.toLowerCase().includes(filterValue));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTableData() {
    this.converterService.getCurrencyRatesTable()
      .subscribe(response => {
        this.dataSource.data = response[0].rates;
        this.currencies = response[0].rates;
      });
  }

  getCalculatedData(amount) {
    this.converterService.getCurrencyRate(this.currencyFrom)
      .subscribe(response => {
        this.currencyFromObj = response;
      });

    this.converterService.getCurrencyRate(this.currencyTo)
      .subscribe(response => {
        this.currencyToObj = response;
      });
    this.calculateExchangeAmount(this.currencyFromObj, this.currencyToObj, amount);
  }

  calculateExchangeAmount(fromValue, toValue, amount) {
    this.convertedValue = (fromValue.rates[0].mid) / (toValue.rates[0].mid);
    this.convertedValue *= amount;
    this.convertedValue = this.convertedValue.toFixed(2);
  }

  setCurrencyFrom(event) {
    console.log(event)
    this.currencyFrom = event.option.value;
  }

  setCurrencyTo(event) {
    this.currencyTo = event.option.value;
  }

}
