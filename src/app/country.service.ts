import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CountryService {

  constructor(private http: HttpClient ) { }
  months= [
    "January",  
    "Febraury",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  getCountries(){
    return this.http.get('/assets/countries.json');
  }
  getTimeZone(){
    return this.http.get("/assets/timezone.json");
  }
  getYears():number[]{
    const date = new Date();
    const thisYear = date.getFullYear();
    var allYears = []
    for(var i =0; i<=100; i++){
      allYears.push(thisYear-i);
    }
    return allYears;
  }
  getMonths(){
    return this.months;
  }
  getDatesOfMonth(monthNumber:number, year:number){

    if ([1, 3, 5, 7, 8, 10, 12].includes(monthNumber)){
      return 31;
    }else if (monthNumber==2){
      var febDays = 28;
      if(year%4==0) febDays = 29;
      return febDays;
    }else if ([4, 6, 9, 11].includes(monthNumber)){
      return 30
    }else{
      return NaN;
    }
  }
} 
