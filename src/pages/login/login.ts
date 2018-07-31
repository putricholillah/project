import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	data: string;
  constructor( public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  
  }
  masuk() {
	  this.http.get("Access-Control-Allow-Origin: http://brtsemarang.com/v2/ionic/csrf_details")
	  .map(res => res.json())
	  .subscribe(data => {
		  this.data = data;
		  resolve(this.data);	  
  });
}
}