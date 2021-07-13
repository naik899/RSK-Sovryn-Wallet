import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenBalances } from 'src/app/models/wallet.models';
import { environment } from 'src/environments/environment';
import { ChaindataService } from '../chain/chaindata.service';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private http: HttpClient, private chainDataService:ChaindataService) { }

  getInfo(withNft: boolean): Promise<any>{
    let chainInfo = this.chainDataService.getChainData();
    let tokenBalanceInfoEndPoint = environment.apiUrl + "/v1/"+ chainInfo.chaintype +"/address/"+ chainInfo.chainaddress +"/balances_v2/?key="+ environment.apiKey + "&nft="+ withNft;
    return  this.http.get<tokenBalances>(tokenBalanceInfoEndPoint).toPromise();
  }
}
