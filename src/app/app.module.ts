import { InfoPageModule } from './../pages/info/info.module';
import { CalculoRetrogradoPageModule } from './../pages/calculo-retrogrado/calculo-retrogrado.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';



@NgModule({
  declarations: [
    MyApp,
    HomePage,    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalculoRetrogradoPageModule,
    InfoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
