import { Component, OnInit } from '@angular/core';
import { IndustryService } from '../services/industry.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:any=[];
  constructor(private  indusService:IndustryService) { }

  ngOnInit(): void {
    this.getCategoryImages();
  }

  getCategoryImages() {
    this.indusService.getIndus().subscribe((resp: any) => {
      this. categories = resp.result.industries;
      console.log(this.categories)
    })
  }
}
