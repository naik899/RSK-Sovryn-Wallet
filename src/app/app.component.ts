import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ChaindataService } from './services/chain/chaindata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'argon-dashboard-angular';

  constructor(private router: Router, private chaindataservice: ChaindataService) { }

  ngOnInit() {
    const data = this.chaindataservice.getChainData();
    if (!data.chainaddress || !data.chaintype) {
      if (!data.chainaddress) {
        data.chainaddress = "0xfFe1426e77CE0F7c0945fCC1f4196CD8dC3f090A";
      }
      if (!data.chaintype) {
        data.chaintype = "31";
      }
      this.chaindataservice.setChainData(data.chainaddress,data.chaintype)
    }

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
