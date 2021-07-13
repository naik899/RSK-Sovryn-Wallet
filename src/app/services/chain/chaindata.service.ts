import { Injectable } from '@angular/core';
import { ChainData } from 'src/app/models/chaindata.models';

@Injectable({
  providedIn: 'root'
})
export class ChaindataService {

  constructor() { }
  public getChainData(): ChainData {
    return {
      chainaddress: localStorage.getItem("chainaddress"),
      chaintype: localStorage.getItem("chaintype")
    };

  }

  public setChainData(chainaddress, chaintype) {
    localStorage.setItem("chainaddress", chainaddress);
    localStorage.setItem("chaintype", chaintype)
    window.location.reload();
  }
}
