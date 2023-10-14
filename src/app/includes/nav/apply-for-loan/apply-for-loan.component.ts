import { Component } from '@angular/core';
import { CountryService } from 'src/app/country.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-apply-for-loan',
  templateUrl: './apply-for-loan.component.html',
  styleUrls: ['./apply-for-loan.component.css']
})

export class ApplyForLoanComponent {
  countries:string[] = []
  constructor(
    private countryService: CountryService,
    private http: HttpClient,
    private api: ApiService
  ){}

  apiUrl = this.api.apiUrl;
  ngOnInit(){
    this.countryService.getCountries().subscribe((data:any)=>{
      this.countries = data.countries
    })
  }
  error_msg:String = "";

  userData = {
    first_name: "",
    last_name: '',
    phone: "",
    email: "",
    address: "",
    pincode: '',
    country: '',
    loanAmtRequired: '',
    profession: '',
    summary: ''
  }
  clicked:Boolean = false;
  
  onSubmit(isvalid:Boolean){
    if (!isvalid){
      this.error_msg = "Please fill out all details!";
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }else{
      this.error_msg = "";
      this.http.post(`${this.apiUrl}api/loan%apply`, this.userData).subscribe((response: any)=>{
        console.log(response);
          if(response.success == true){
            document.querySelector(".apply-for-loan form")!.innerHTML = "<h3>Thankyou for submitting<br>We'll get back to you soon.</h3>";
          }
      });
    }
  }
  
}
