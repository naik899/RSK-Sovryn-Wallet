import { Component, OnInit } from '@angular/core';
import { BalanceService } from 'src/app/services/balance/balance.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css']
})
export class NftComponent implements OnInit {

  constructor(private tokenService: BalanceService) { }
  public NftData = [];
  async ngOnInit(): Promise<void> {
   // this.loaderSerivce.showLoader();
    let data = await this.tokenService.getInfo(true);
    
    this.processNFTData(data);

  }

  public processNFTData(data: any) {
    data = data.data;
    const tempArray = [];
    for (let index = 0; index < data.items.length; index++) {
      const nftItems = data.items[index].nft_data;
      if (nftItems && nftItems.length > 0) {
        for (let j = 0; j < nftItems.length; j++) {
          const nftItem = nftItems[j];
          const tempObj = {} as any;
          tempObj.created_by_address = nftItem.created_by_address;
          tempObj.name = nftItem.external_data.name;
          tempObj.description = nftItem.external_data.description;
          tempObj.image = nftItem.external_data.image;
          tempObj.original_owner = nftItem.original_owner;
          tempArray.push(tempObj);
        }
      }
    }
    this.NftData = tempArray;

  }

}
