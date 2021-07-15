import { Component, OnInit } from '@angular/core';
import { tokenPriceInfo } from 'src/app/models/tokenPrice.models';
import { tokenInfo } from 'src/app/models/wallet.models';
import { BalanceService } from 'src/app/services/balance/balance.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { PriceService } from 'src/app/services/spot/price.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  tokenInfo: tokenInfo[] = null;
  spottokens: tokenPriceInfo[] = null;
  public totalBalance = 0;

  constructor(private tokenservice: BalanceService, private priceService: PriceService, private loaderService: LoaderService) { }

  async ngOnInit(): Promise<void> {

    this.loaderService.showLoader();
    const data = await this.tokenservice.getInfo(false);
    let priceInfo = await this.priceService.getSpotPrices();

    if (data.data.items.length > 0) {
      this.tokenInfo = data.data.items;
    }

    if (priceInfo != null && priceInfo.data.items.length > 0) {
      this.spottokens = priceInfo.data.items;
    }

     this.loaderService.hideLoader();
  }

  public getWalletBalance(balance: string, contract_decimal: number): string {

    let result = Number.parseFloat(balance) / (Math.pow(10, contract_decimal));
    return result.toFixed(2);
  }

  getUSDBalance(balance: string, ticker: string, contract_decimal: number): string {

    let tokenDetails = this.spottokens.find(s => s.contract_ticker_symbol == ticker);
    if (tokenDetails != null) {
      let result = Number.parseFloat(balance) / (Math.pow(10, contract_decimal));
      result = result * tokenDetails?.quote_rate;

      this.totalBalance += result;
      return " ~ $" + result.toFixed(3);
    }


    return "";
  }

  getTotalBalance(): string {
    return "$ " + this.totalBalance.toFixed(3);
  }


}
