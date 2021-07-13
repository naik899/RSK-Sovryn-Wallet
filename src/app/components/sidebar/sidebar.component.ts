import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/wallet', title: 'Wallet',  icon: 'fas fa-wallet', class: '' },
    { path: '/transactions', title: 'Transactions',  icon: 'fas fa-exchange-alt', class: '' },
    { path: '/nfts', title: 'NFT',  icon: 'far fa-image', class: '' },
    { path: '/spotprices', title: 'Spot Prices',  icon: 'fas fa-tag', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
