import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(public transactionService: TransactionService) { }

  async ngOnInit() {
   // this.loaderService.showLoader();
    await this.transactionService.getTransactionList();

   // this.loaderService.hideLoader();
   
  }

}
