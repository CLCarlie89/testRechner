import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  wert1: string;
  wert2: string;
  wert3: Number;
  t1: string;

  constructor(public router: Router) { }


  openNextTab(rechenArt: number) {

    switch (rechenArt) {
      case 1:
        this.wert3 = Number.parseInt(this.wert1) + Number.parseInt(this.wert2);
        this.t1 = this.wert3.toString();
        break;
      case 2:
        this.wert3 = Number.parseInt(this.wert1) - Number.parseInt(this.wert2);
        this.t1 = this.wert3.toString();
        break;
      case 3:
        this.wert3 = Number.parseInt(this.wert1) * Number.parseInt(this.wert2);
        this.t1 = this.wert3.toString();
        break;
      case 4:
        const v1 = Number.parseInt(this.wert2);
        if (v1 != 0) {
          this.wert3 = Number.parseInt(this.wert1) / v1;
          this.t1 = this.wert3.toString();
        } else {
          this.t1 = "Division durch 0 ist nicht möglich.";
        }

        break;
    }

    this.router.navigate(['tabs/tab2', { name: this.t1 }])
  }
}
