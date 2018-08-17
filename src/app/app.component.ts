// Angular
import { Router, RouterOutlet } from '@angular/router';
import { Component, ViewChild } from '@angular/core';

// Ionic
import { Platform, NavController, Menu } from '@ionic/angular';

// Capacitor
import { Plugins, StatusBarStyle } from '@capacitor/core';
const { SplashScreen, StatusBar } = Plugins;

class SideMenuOption {
  public title: string;
  public url: string;
  public icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  @ViewChild(Menu) menu: Menu;

  public options: Array<SideMenuOption> = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(private platform: Platform, private navCtrl: NavController) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform
      .ready()
      .then(() => {

        StatusBar
          .setStyle({ style: StatusBarStyle.Dark })
          .catch(() => { });

        SplashScreen
          .hide()
          .catch(() => { });

      });
  }

  onOptionSelected(option: any): void {
    this.menu
      .close()
      .then(() => {
        this.navCtrl.goRoot(option.url);
      });
  }
}
