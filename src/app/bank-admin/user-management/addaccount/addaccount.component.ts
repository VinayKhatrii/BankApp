import { Component } from '@angular/core';
import { CountryService } from 'src/app/country.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})

export class AddaccountComponent {
  constructor(
    private countryService: CountryService,
    private api: ApiService,
    private http:HttpClient
  ){}
  birthdate: Date | undefined;
  countries:String[] = [];
  timezones:any = {};
  years:any = [];
  months:String[] = []
  days:number[] = [];
  apiUrl = this.api.apiUrl;
  ngOnInit(){
    this.countryService.getCountries().subscribe((response:any)=>{
      this.countries = response.countries;
    });
    this.countryService.getTimeZone().subscribe((response: any) => {
      this.timezones = response.timezones;
    });
    this.years = this.countryService.getYears();
    this.months = this.countryService.getMonths();
  }

  todaysDate = new Date().getDate().toString().padStart(2, '0');
  month = new Date().getMonth().toString().padStart(2, '0');
  year = new Date().getFullYear();
  formattedDate = `${this.todaysDate}/${this.month}/${this.year}`;

  addAccountFormDetails = {
    name: "",
    surname: "",
    username: "",
    accountnumber: null,
    dob: "",
    accbalance: null,
    currency: "",
    loanamt: "",
    doc: this.formattedDate,
    howmanyloan: null,
    country: "Afghanistan",
    state: "",
    city:"",
    fulladdress: "",
    telephone: null,
    mobile: null,
    qualification: "",
    timezone:"",
    minor: false,
    isLoggedIn: false
  }
  error_msg = "";

  addCustomerDetails(){
    this.addAccountFormDetails.timezone = this.timezones[this.addAccountFormDetails.country];
    console.log(this.addAccountFormDetails);
    this.http.post(`${this.apiUrl}api/admin/addUser/`,this.addAccountFormDetails).subscribe(
      (res:any)=>{
        alert("Added Successfully!")
        
    },
    (error)=>{
      alert("Perhaps Account number or username already exists!")
    })
  }
}
