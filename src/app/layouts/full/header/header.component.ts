import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../../../shared/menu-items/menu-items';
import { Router, NavigationEnd } from '@angular/router';
import { BroadcastService } from '../../../shared/services/broadcast.service';
import { BroadcastData } from '../../../shared/models/broadcast-data.model';
import { BroadcastEnum } from '../../../shared/enums/broadcast.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent implements OnInit {
  hasSearch = false;
  hasCreate = false;

  constructor(
    private path: Router,
    public menuItems: MenuItems,
    public broadcastService: BroadcastService) {
  }

  public ngOnInit() {
    this.verifyUrl(window.location.href);
    this.path.events.subscribe((event: NavigationEnd) => {
      if (event instanceof NavigationEnd) {
        this.hasCreate = false;
        this.hasSearch = false;
        this.verifyUrl(event.url);
      }
    });
  }

  private verifyUrl(url: string): void {
    if (!(url.includes('create') || url.includes('edit'))) {
      const rota = this.menuItems.getMenuitem().find(x => url.includes(x.state));
      if (rota) {
        this.hasCreate = rota.hasCreate;
        this.hasSearch = rota.hasSearch;
      }
    }
  }

  private onClickCreate($event: any): void {
    this.broadcastService.send(new BroadcastData(BroadcastEnum.Create));
  }

  private onClickSearch($event: any): void {
    this.broadcastService.send(new BroadcastData(BroadcastEnum.Search));
  }
}
