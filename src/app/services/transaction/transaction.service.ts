import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { transactions, transactionResponse } from 'src/app/models/tx.models';
import { environment } from 'src/environments/environment';
import { ChaindataService } from '../chain/chaindata.service';
import { PriceService } from '../spot/price.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private http: HttpClient, private chainDataService: ChaindataService,  private spotPrice: PriceService) { }
  transactionList: transactions[] = null;
  valueTransfers: transactions[] = null;
  deploymentTransactions: transactions[] = null;
  interactionTransfers: transactions[] = null;

  avgGasSpent: any = 0;
  totalValueTransfer: any = 0;
  valueTransferUSD: any = 0;
  mostinteractedarray: any = ''
  mostinteracted: any = '';
  getTransactions(): Promise<transactionResponse> {

    let chainInfo = this.chainDataService.getChainData();
    let getTransactionsEndPoint = environment.apiUrl + "/v1/" + chainInfo.chaintype + "/address/" + chainInfo.chainaddress + "/transactions_v2/?key=" + environment.apiKey;
    return this.http.get<transactionResponse>(getTransactionsEndPoint).toPromise();
  }

  async getTransactionList() {
    let transactions = await this.getTransactions();
    let spotPrice = await this.spotPrice.getSpotPrice("FTM");
    if (transactions != null && transactions.data.items.length > 0) {
      this.transactionList = transactions.data.items;
      this.interactionTransfers = this.transactionList.filter(s => s.log_events.length > 0 && s.to_address != null);
      this.valueTransfers = this.transactionList.filter(s => s.value != "0" && s.to_address != null && s.to_address.length > 0);
      this.deploymentTransactions = this.transactionList.filter(s => s.to_address == null);




      this.avgGasSpent = this.transactionList.reduce(
        (cost, entry) =>
          cost += entry.gas_spent,
        0);

      let contractDecimal = spotPrice.data.items[0].contract_decimals;
      let quoteRate = spotPrice.data.items[0].quote_rate;
      this.avgGasSpent = Number.parseFloat((this.avgGasSpent / this.transactionList.length).toString()).toFixed(2);
      this.totalValueTransfer = this.valueTransfers.reduce((cost, entry) => cost += Number.parseFloat(entry.value), 0);
      this.totalValueTransfer = this.totalValueTransfer / (Math.pow(10, contractDecimal));
      this.mostinteractedarray = _.groupBy(this.transactionList, function (d) {
        return d.to_address;
      })
      let min = 0;
      const keys = Object.keys(this.mostinteractedarray);
      for (let index = 0; index < keys.length; index++) {
        const element = this.mostinteractedarray[keys[index]];
        if (element.length > min) {
          this.mostinteracted = keys[index];
          min = element.length;
        }

      }
      this.valueTransferUSD = Number.parseFloat((this.totalValueTransfer * quoteRate).toString()).toFixed(3);

    }

  }
}
