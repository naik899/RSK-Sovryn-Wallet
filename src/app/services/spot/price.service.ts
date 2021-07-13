import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) { }

  getSpotPrices(): Promise<any>
  {
    let getSpotPricesEndPoint = environment.apiUrl + "/v1/pricing/tickers/?key="+ environment.apiKey + "&page-size=6000" ;
    return  this.http.get<any>(getSpotPricesEndPoint).toPromise();
  }

  getSpotPrice(ticker: string): Promise<any>
  {
    let getSpotPricesEndPoint = environment.apiUrl + "/v1/pricing/tickers/?key="+ environment.apiKey + "&tickers=" + ticker ;
    return  this.http.get<any>(getSpotPricesEndPoint).toPromise();
  }
}
