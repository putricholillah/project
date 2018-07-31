import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashscreenPage } from '../pages/splashscreen/splashscreen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SplashscreenPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {
    
	platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      
	  let splash = modalCtrl.create(SplashscreenPage);
	  splash.present();
    });
  }
}

