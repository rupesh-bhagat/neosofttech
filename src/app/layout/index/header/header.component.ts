import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  isLang: boolean = false;
  isSearch: boolean = false;
  isAccount: boolean = false;
  isCountry: boolean = false;
  isIcon: boolean = true;

  isWhoWeAre: boolean = false;
  isWhatWeDo: boolean = false;
  isWeWorkWith: boolean = false;
  isTechnology: boolean = false;


  caretDown: string = "fa fa-caret-down";
  caretUp: string = "fa fa-caret-up";

  angleDown: string = "fa fa-angle-down";
  angleUp: string = "fa fa-angle-up";
  close: string = "fa fa-times";
  public iconWhoWeAre = 'fa fa-angle-down'; 
  public iconWhatWeDo = 'fa fa-angle-down'; 
  public iconWeWorkWith= 'fa fa-angle-down';
  public iconTechnology='fa fa-angle-down';

  isActive: boolean = false;
  isCheck:boolean= false;

  // showBox = true;


  constructor() { }

  // onClickedOutside(event) {
  //   // this.showBox = false;
  //   if(event && event['value'] === true) {
  //    this.isLang = false;
  //   } else {
  //     this.isLang = true;
  //   }

  // }
  // onClickedOutside(e: Event) {
  //   this.isLang = false;
  // }

  whoWeAre() {
    this.isWhoWeAre = !this.isWhoWeAre;
    this.isWhatWeDo = false;
    this.isWeWorkWith = false;
    this.isTechnology = false;
    this.iconWhatWeDo='fa fa-angle-down';
    this.iconWeWorkWith='fa fa-angle-down';
    this.iconTechnology='fa fa-angle-down';
    if (this.iconWhoWeAre === 'fa fa-angle-down') {
      this.iconWhoWeAre = "fa fa-times";
    } else {
      this.iconWhoWeAre = 'fa fa-angle-down';
    }
  }

  whatWeDo() {
    this.isWhatWeDo = !this.isWhatWeDo;
    this.iconWhoWeAre='fa fa-angle-down';
    this.iconWeWorkWith='fa fa-angle-down';
    this.iconTechnology='fa fa-angle-down';
    this.isWhoWeAre = false;
    this.isWeWorkWith = false;
    this.isTechnology = false;

    if (this.iconWhatWeDo === 'fa fa-angle-down') {
      this.iconWhatWeDo = 'fa fa-times';
    } else {
      this.iconWhatWeDo = 'fa fa-angle-down';
    }
  }

  weWorkWith() {
    this.isWeWorkWith = !this.isWeWorkWith;
    this.isWhoWeAre = false;
    this.isWhatWeDo = false;
    this.isTechnology = false;
    this.iconWhoWeAre='fa fa-angle-down';
    this.iconWhatWeDo='fa fa-angle-down';
    this.iconTechnology='fa fa-angle-down';

    if (this.iconWeWorkWith === 'fa fa-angle-down') {
      this.iconWeWorkWith = 'fa fa-times';
    } else {
      this.iconWeWorkWith = 'fa fa-angle-down';
    }
  }
  technologly() {
    this.isTechnology = !this.isTechnology;
    this.isWhoWeAre = false;
    this.isWhatWeDo = false;
    this.isWeWorkWith = false;
    this.iconWhoWeAre='fa fa-angle-down';
    this.iconWhatWeDo='fa fa-angle-down';
    this.iconWeWorkWith='fa fa-angle-down';

    if (this.iconTechnology === 'fa fa-angle-down') {
      this.iconTechnology = 'fa fa-times';
    } else {
      this.iconTechnology = 'fa fa-angle-down';
    }
  }

  //Languages
  openLang() {
    this.isLang = true;
    this.isSearch = false;
    this.isAccount = false;
    this.isCountry = false;
  }
  closeLang() {
    this.isLang = false;
  }

  //Search
  openSearch() {
    this.isSearch = true;
    this.isLang = false;
    this.isAccount = false;
    this.isCountry = false;
    this.isActive = true;
  }
  closeSearch() {
    this.isSearch = false;
  }

  //Account
  openAccount() {
    this.isAccount = true;
    this.isLang = false;
    this.isSearch = false;
    this.isCountry = false;
  }
  closeAccount() {
    this.isAccount = false;
  }

  // Country
  openCountry() {
    this.isIcon = !this.isIcon;
    this.isCountry = !this.isCountry;
    this.isLang = false;
    this.isSearch = false;
    this.isAccount = false;
  }


  ngOnInit() {

  }

}
