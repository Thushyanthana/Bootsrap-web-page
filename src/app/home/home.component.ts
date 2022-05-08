import { Component, OnInit } from '@angular/core';
import { IndustryService } from '../services/industry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cardParent: any = [];

  footerParent: any = [];

  constructor(private indusService: IndustryService,private router: Router) { }

  ngOnInit(): void {
    this.getCardhome();
    this.getFooterImages();
  }

  //get cards
  getCardhome() {
    return this.indusService.getCards().subscribe((resp): any => {
      this.cardParent = resp.result;
      console.log(this.cardParent);

    })
  }

  // //get footer images
  getFooterImages() {
    this.indusService.getIndus().subscribe((resp: any) => {
      this.footerParent = resp.result.industries;
      console.log(this.footerParent.length)
    })
  }

  btnClick()
  {
    this.router.navigateByUrl('/categories');
  }

}
