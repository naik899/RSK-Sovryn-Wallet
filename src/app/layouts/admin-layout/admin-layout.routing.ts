import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { WalletComponent } from 'src/app/pages/wallet/wallet.component';
import { TransactionsComponent } from 'src/app/pages/transactions/transactions.component';
import { SpotpricesComponent } from 'src/app/pages/spotprices/spotprices.component';
import { NftComponent } from 'src/app/pages/nft/nft.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'wallet',           component: WalletComponent },
    { path: 'transactions',         component:  TransactionsComponent},
    { path: 'nfts',          component: NftComponent },
    { path: 'spotprices',           component:  SpotpricesComponent},

];
