import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  title: any;
  droga: any;

  ionViewWillEnter() {
    this.droga = this.navParams.data;
    this.defineTitle(this.navParams.data);
  }

  turnBack(){
    this.navCtrl.pop();
  }

  defineTitle(name: String){
    if (name != 'rocuronio' && name != 'lidocaina'){
      this.title = name.charAt(0).toLocaleUpperCase() + name.slice(1);
    } else if (name == 'rocuronio') {
      this.title = 'Rocurônio';
    } else if (name == 'lidocaina') {
      this.title = 'Lidocaína'
    }
  }

}
