import { Component, OnInit } from '@angular/core';
import { BalanceService } from 'src/app/services/balance/balance.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css']
})
export class NftComponent implements OnInit {

  constructor(private tokenService: BalanceService, private loaderService: LoaderService) { }
  public NftData = [];
  async ngOnInit(): Promise<void> {
    this.loaderService.showLoader();
    let data = await this.tokenService.getInfo(true);
    this.processNFTData(data);
    this.loaderService.hideLoader()
    
    
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
