import { Component, Input, OnInit } from '@angular/core';
import { IndustryService } from '../services/industry.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
@Input() footerChild:any=[];



 constructor() 
 {
 }

  ngOnInit(): void {
    
  }
}
