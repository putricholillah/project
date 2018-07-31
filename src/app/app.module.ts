import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { SplashscreenPage } from '../pages/splashscreen/splashscreen';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { CreatePage } from '../pages/create/create';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { NetworkEngineProvider } from '../providers/network-engine/network-engine';
import { enableProdMode } from '@angular/core';

enableProdMode();

@NgModule({
  declarations: [
    MyApp,
	SplashscreenPage,
	LoginPage,
	HomePage,
	CreatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	SplashscreenPage,
	LoginPage,
	HomePage,
	CreatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    NetworkEngineProvider,
 
  ]
})
export class AppModule {}
