import { Component, NgModule } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //number, string, boolean, any, array
    
  num : number;
  cos : object;
  mayormenor : string = "...";
  numsecreto : number = this.numAleatorio(0,10);
  constructor(public navCtrl: NavController) {

    
  }
  numAleatorio (a,b){
    return Math.round(Math.random()*(b-a)+parseInt(a));
  }

  compruebaNumero(){
    if (this.num){
      if (this.numsecreto < this.num){
        this.mayormenor = "Es menor";
      } else if (this.numsecreto > this.num){
        this.mayormenor = "Es mayor";
      } else this.mayormenor = "";
    }
  }

  reinicio(){
    this.num = null;
    this.mayormenor = "...";
    this.numsecreto = this.numAleatorio(1,10);
  }
}
