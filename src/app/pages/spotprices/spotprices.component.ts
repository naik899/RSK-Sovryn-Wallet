import { Component, OnInit } from '@angular/core';
import { tokenPriceInfo } from 'src/app/models/tokenPrice.models';
import { PriceService } from 'src/app/services/spot/price.service';
import { of, Subject, Subscription } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, map, mergeMap } from 'rxjs/operators';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-spotprices',
  templateUrl: './spotprices.component.html',
  styleUrls: ['./spotprices.component.css']
})
export class SpotpricesComponent implements OnInit {

  tokens: tokenPriceInfo[] = null;
  public keyUp = new Subject<KeyboardEvent>();
  private subscription: Subscription;
  constructor(private priceInfo: PriceService, private loader: LoaderService) {
    this.subscription = this.keyUp.pipe(
      map((event: any) => event.target.value),
      debounceTime(500),
      distinctUntilChanged(),
      mergeMap(search => of(search).pipe(
        delay(100),
      )),
    ).subscribe((d) => {
      if (!d || d == "") {
        this.getDefaultData();
      } else {
        this.updateBySearch(d);
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async ngOnInit(): Promise<void> {

    this.loader.showLoader();
    this.getDefaultData()

  }
  async getDefaultData() {
    let data = await this.priceInfo.getSpotPrices();
    this.loader.hideLoader();
    if (data != null && data.data.items.length > 0) {
      this.tokens = data.data.items;
      this.tokens = [...this.tokens.sort(a => a.rank).slice(0, 50)];
      console.log(this.tokens);
    }
  }
  public async updateBySearch(searchstring: any) {
    this.loader.showLoader();
    let data = await this.priceInfo.getSpotPrice(searchstring);
    if (data != null && data.data.items.length > 0) {
      this.tokens = data.data.items;
      this.tokens = [...this.tokens.sort(a => a.rank).slice(0, 50)];
      console.log(this.tokens);
    }
    this.loader.hideLoader();
  }


  getTokenHolders(contractAddress: string): string {
    return contractAddress;
  }

}
