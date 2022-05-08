import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {
  bas = environment.baseurl;

  constructor(private http:HttpClient) 
  { 
    
  }


  getIndus() {
    return this.http.get<any>(this.bas + 'Industry/v1.1/Industry?[Filter]isActive:=true')
  }

  getCards()
  {
    return  this.http.get<any>( this.bas +'CustomerAgg/api/WebMarketPlace/get-menu')
  }

}
