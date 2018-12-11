import { InfoPage } from './../info/info';
import { CalculoRetrogradoPage } from './../calculo-retrogrado/calculo-retrogrado';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  //Variáveis
  peso = 70;
  altura = 170;
  mulher = true;

  //Iniciais
  pagInicial = true;
  showIot = false;
  showSed = false;
  showDva = false;
  showAnt = false;

  //Mostradores para IOT e Sedação
  showFentanil = false;
  showLidocaina = false;
  showEtomidato = false;
  showQuetamina = false;
  showPropofol = false;
  showMidazolam = false;
  showSuccinilcolina = false;
  showRocuronio = false;

  //Mostradores para DVA
  showNoradrenalina = false;
  showDobutamina = false;
  showDopamina = false;
  showAdrenalina = false;
  showVasopressina = false;
  showNitroprussiato = false;
  showNitroglicerina = false;

  //Submostradores para diluição de DVA
  showNoradrenalina1 = false;
  showNoradrenalina2 = false;
  showAdrenalina1 = false;
  showAdrenalina2 = false;
  showNitroglicerina1 = false;
  showNitroglicerina2 = false;

  //Mostradores para Antídotos
  showFlumazenil = false;
  showNaloxone = false;
  showProtamina = false;
  showGluconato = false;
  showAcetilcisteina = false;
  showVitaminaK = false;
  showVitaminaB6 = false;
  showFisiostigmina = false;
  showGlucagon = false;
  showAtropina = false;

  //Definição de nível para o FAB
  level1 = false; //Para mostrar que saiu da página inicial
  level2 = false; //Para mostrar que passou da segunda página

  iot() {
    this.pagInicial = false;
    this.showIot = true;
    this.level1 = true;
  }
  sedacao() {
    this.pagInicial = false;
    this.showSed = true;
    this.level1 = true;
  }
  dva() {
    this.pagInicial = false;
    this.showDva = true;
    this.level1 = true;
  }
  antidotos() {
    this.pagInicial = false;
    this.showAnt = true;
    this.level1 = true;
  }

  calcRetro(med) {
    this.navCtrl.push(CalculoRetrogradoPage, [med, this.peso])
    console.log('peso:' + this.peso)
  }

  turnBack() {
    this.defineLevel2();
    if (this.level1 && !this.level2) {
      this.pagInicial = true;
      this.level1 = false;
      this.showAnt = false;
      this.showSed = false;
      this.showIot = false;
      this.showDva = false;
    }
    if (this.level2) {
      this.level2 = false;
      if (this.showIot) {
        this.showFentanil = false;
        this.showLidocaina = false;
        this.showEtomidato = false;
        this.showQuetamina = false;
        this.showPropofol = false;
        this.showMidazolam = false;
        this.showSuccinilcolina = false;
        this.showRocuronio = false;
      }
      if (this.showSed) {
        this.showFentanil = false;
        this.showPropofol = false;
        this.showMidazolam = false;
      }
      if (this.showDva) {
        this.showNoradrenalina = false;
        this.showNoradrenalina1 = false;
        this.showNoradrenalina2 = false;
        this.showDobutamina = false;
        this.showDopamina = false;
        this.showAdrenalina = false;
        this.showAdrenalina1 = false;
        this.showAdrenalina2 = false;
        this.showVasopressina = false;
        this.showNitroprussiato = false;
        this.showNitroglicerina = false;
        this.showNitroglicerina1 = false;
        this.showNitroglicerina2 = false;
      }
      if (this.showAnt) {
        this.showFlumazenil = false;
        this.showNaloxone = false;
        this.showProtamina = false;
        this.showGluconato = false;
        this.showAcetilcisteina = false;
        this.showVitaminaK = false;
        this.showVitaminaB6 = false;
        this.showFisiostigmina = false;
        this.showGlucagon = false;
        this.showAtropina = false;
      }
    }
  }

  iotCalc(med) {
    if (med == 'fentanil') {
      this.showFentanil = !this.showFentanil;
    } else if (med == 'lidocaina') {
      this.showLidocaina = !this.showLidocaina;
    } else if (med == 'etomidato') {
      this.showEtomidato = !this.showEtomidato;
    } else if (med == 'quetamina') {
      this.showQuetamina = !this.showQuetamina;
    } else if (med == 'propofol') {
      this.showPropofol = !this.showPropofol;
    } else if (med == 'midazolam') {
      this.showMidazolam = !this.showMidazolam;
    } else if (med == 'succinilcolina') {
      this.showSuccinilcolina = !this.showSuccinilcolina;
    } else if (med == 'rocuronio') {
      this.showRocuronio = !this.showRocuronio;
    }
  }

  dvaCalc(med) {
    if (med == 'noradrenalina') {
      this.showNoradrenalina = !this.showNoradrenalina;
      this.showNoradrenalina1 = false;
      this.showNoradrenalina2 = false;
    } else if (med == 'dopamina') {
      this.showDopamina = !this.showDopamina;
    } else if (med == 'dobutamina') {
      this.showDobutamina = !this.showDobutamina;
    } else if (med == 'vasopressina') {
      this.showVasopressina = !this.showVasopressina;
    } else if (med == 'adrenalina') {
      this.showAdrenalina = !this.showAdrenalina;
      this.showAdrenalina1 = false;
      this.showAdrenalina2 = false;
    } else if (med == 'nitroglicerina') {
      this.showNitroglicerina = !this.showNitroglicerina;
      this.showNitroglicerina1 = false;
      this.showNitroglicerina2 = false;
    } else if (med == 'nitroprussiato') {
      this.showNitroprussiato = !this.showNitroprussiato;
    }
  }

  antCalc(med) {
    if (med == 'flumazenil') {
      this.showFlumazenil = !this.showFlumazenil;
    } else if (med == 'naloxone') {
      this.showNaloxone = !this.showNaloxone;
    } else if (med == 'protamina') {
      this.showProtamina = !this.showProtamina;
    } else if (med == 'gluconato') {
      this.showGluconato = !this.showGluconato;
    } else if (med == 'acetilcisteina') {
      this.showAcetilcisteina = !this.showAcetilcisteina;
    } else if (med == 'vitaminaK') {
      this.showVitaminaK = !this.showVitaminaK;
    } else if (med == 'vitaminaB6') {
      this.showVitaminaB6 = !this.showVitaminaB6;
    } else if (med == 'fisiostigmina') {
      this.showFisiostigmina = !this.showFisiostigmina;
    } else if (med == 'glucagon') {
      this.showGlucagon = !this.showGlucagon;
    } else if (med == 'atropina') {
      this.showAtropina = !this.showAtropina;
    }
  }

  defineLevel2() {
    if (this.showIot) {
      if (this.showFentanil || this.showLidocaina || this.showEtomidato || this.showQuetamina || this.showPropofol ||
        this.showMidazolam || this.showSuccinilcolina || this.showRocuronio) {
        this.level2 = true;
      }
    }
    if (this.showSed) {
      if (this.showFentanil || this.showPropofol || this.showMidazolam) {
        this.level2 = true;
      }
    }
    if (this.showDva) {
      if (this.showNoradrenalina || this.showDobutamina || this.showDopamina || this.showAdrenalina ||
        this.showVasopressina || this.showNitroglicerina || this.showNitroprussiato) {
        this.level2 = true;
      }
    }
    if (this.showAnt) {
      if (this.showFlumazenil || this.showNaloxone || this.showProtamina || this.showGluconato ||
        this.showAcetilcisteina || this.showVitaminaK || this.showVitaminaB6 || this.showFisiostigmina ||
        this.showGlucagon || this.showAtropina) {
        this.level2 = true;
      }
    }
  }

  info(med) {
    this.navCtrl.push(InfoPage, med)
  }

}
