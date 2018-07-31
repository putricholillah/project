import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SplashScreen } from '@ionic-native/splash-screen';


/**
 * Generated class for the SplashscreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splashscreen',
  templateUrl: 'splashscreen.html',
})
export class SplashscreenPage {
  splash = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public splashScreen: SplashScreen) {
}

  ionViewDidEnter() {
    this.splashScreen.hide();
	
	setTimeout(() => {
		this.viewCtrl.dismiss();
	}, 4000);
		this.navCtrl.setRoot(LoginPage);
}

}