import { Page, Alert, NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@page({
	templateUrl: 'login.html'
})

export class LoginPage {
	constructor(http: Http, nav: NavController) {
		this.http = http;
		this.nav = nav;
	}
}
asuk() {
	 
	  this.http.get("http://brtsemarang.com/v2/ionic/csrf_details")
	  .subscribe(data => {
		  let alert = this.alertCtrl.create({
			  title: "Token",
			  subTitle: data.json().hash,
			  buttons: ["close"]
		  });
		  this.nav.present(alert);
	  }, error => {
		  console.log(JSON.stringify(error.json));
	  });
  }