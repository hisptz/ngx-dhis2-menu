import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { PROFILE_MENUS } from '../../constants/profile-menus';

@Component({
  selector: 'app-menu-profile',
  templateUrl: './menu-profile.component.html',
  styleUrls: ['./menu-profile.component.css']
})
export class MenuProfileComponent implements OnInit {
  @Input()
  rootUrl: string;

  @Input()
  contextPath: string;

  @Input()
  backgroundColor: string;

  showProfile: boolean;
  currentUser: any;
  loadingUser: boolean;
  profileMenus: any[];
  constructor(private menuService: MenuService) {
    this.showProfile = false;
    this.rootUrl = this.contextPath = '../../../';
    this.loadingUser = true;
    this.profileMenus = PROFILE_MENUS;
  }

  ngOnInit() {
    this.menuService.getUserInfo(this.rootUrl).subscribe((profile: any) => {
      if (profile) {
        this.currentUser = {
          name: profile.displayName,
          email: profile.email,
        };
      }
      this.loadingUser = false;
    });
  }

  showMenuProfile(e) {
    e.stopPropagation();
    this.showProfile = true;
  }

  hideMenuProfile(e?) {
    if (e) {
      e.stopPropagation();
    }

    this.showProfile = false;
  }
}
