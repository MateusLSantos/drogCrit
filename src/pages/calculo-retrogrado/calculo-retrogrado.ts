import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculoRetrogradoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculo-retrogrado',
  templateUrl: 'calculo-retrogrado.html',
})
export class CalculoRetrogradoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  peso: any;
  droga: any;
  diluente: any;
  quant: any;
  velocidade: any;
  showResults = false;
  conc: any;
  dose: any;
  recommended: any;
  unit: any;

  //Volume de ampolas para cálculo retrógrado. A convenção é: [VOLUME, CONCENTRAÇÃO, TIPO]
  //Todas as ampolas, exceto a vasopressina (que é em U), estão em mcg.
  ampolas = {
    //lidocaina: [20, 20, 'mg'],
    fentanil: [10, 50],
    //etomidato: [10, 2, 'mg'],
    //quetamina: [10, 50, 'mg'],
    propofol: [20, 10000],
    midazolam: [10, 5000],
    //succinilcolina: [10, 10, 'mg'],
    //rocuronio: [5, 10, 'mg'],
    noradrenalina: [0, 1000],
    dopamina: [0, 5000],
    dobutamina: [0, 12500],
    adrenalina: [0, 1000],
    vasopressina: [0, 20], //Está em U
    nitroprussiato: [0, 25000],
    nitroglicerina: [0, 5000],
  }

  doses = { //Convenção: dose mínima, dose máxima. Tudo está em microgramas/kilo/minuto
    fentanil: [0.03, 0.05],
    propofol: [5, 80],
    midazolam: [0.5, 5],
    noradrenalina: [0.1, 2],
    dobutamina: [2.5, 20],
    dopamina: [5, 20],
    adrenalina: [0.005, 0.1],
    vasopressina: [0.01, 0.03], //dose fixa, não é por peso. 
    nitroprussiato: [0.3, 10],
    nitroglicerina: [5, 200],
  }

  ionViewWillEnter() {
    console.log(this.navParams.data)
    this.peso = this.navParams.data[1]
    if (this.navParams.data[0] != 'blank') {
      this.droga = this.navParams.data[0]
    }
  }

  calc() {

    //Concentração
    var volTotal = parseFloat(this.diluente) + parseFloat(this.quant);
    var mcgTotal = parseFloat(this.quant) * this.ampolas[this.droga][1]; //Quantidade de microgramas
    this.conc = Math.round((mcgTotal / volTotal) * 100) / 100; //mcg/ml

    //Dose aplicada
    var velMcg = this.conc * parseFloat(this.velocidade) / 60; //mcg/min
    if (this.droga == 'vasopressina' || this.droga == 'nitroglicerina') {
      this.dose = Math.round(velMcg*100)/100; //Não usa peso.
    } else {
      this.dose = Math.round((velMcg / parseFloat(this.peso)) * 100) / 100; //mcg/kg/min
    }

    //Dose recomendada
    this.recommended = this.doses[this.droga];

    this.showResults = true;
  }


  turnBack() {
    this.navCtrl.pop();
  }

}
