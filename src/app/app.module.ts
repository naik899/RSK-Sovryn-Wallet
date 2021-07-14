import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { WalletComponent } from './pages/wallet/wallet.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { SpotpricesComponent } from './pages/spotprices/spotprices.component';
import { NftComponent } from './pages/nft/nft.component';
import { ExplorerComponent } from './pages/transactions/explorer/explorer.component';
import { ValuetransferComponent } from './pages/transactions/valuetransfer/valuetransfer.component';
import { InteractionComponent } from './pages/transactions/interaction/interaction.component';
import { DeploymentComponent } from './pages/transactions/deployment/deployment.component';
import { ClipboardModule } from 'ngx-clipboard';
import { NftDetailsComponent } from './pages/nft/nft-details/nft-details.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ClipboardModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    WalletComponent,
    TransactionsComponent,
    SpotpricesComponent,
    NftComponent,
    ExplorerComponent,
    ValuetransferComponent,
    InteractionComponent,
    DeploymentComponent,
    NftDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
