import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddTrumaModel } from './add-truma/add-truma-model';

@Injectable({
  providedIn: 'root'
})
export class TrumotServiceService {

  // 
  readonly baseUrl = 'https://localhost:44392/'; 

  addTrumaData: AddTrumaModel = new AddTrumaModel();

  constructor(private http: HttpClient) { }

  addTruma() {
    return this.http.post(this.baseUrl+'AddTruma',JSON.stringify({
      "name": this.addTrumaData.Name,"sum": this.addTrumaData.Sum,"type": this.addTrumaData.Type,"purpose": this.addTrumaData.Purpose,"terms": this.addTrumaData.Terms,"currencyType": this.addTrumaData.CurrencyType,"exchangeRate": this.addTrumaData.ExchangeRate}),{headers: new HttpHeaders()
        .set('Content-Type', 'application/json; charset=utf-8')
    } ); 
  }

}
