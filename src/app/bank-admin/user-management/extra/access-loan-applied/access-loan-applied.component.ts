import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-access-loan-applied',
  templateUrl: './access-loan-applied.component.html',
  styleUrls: ['./access-loan-applied.component.css']
})
export class AccessLoanAppliedComponent {
  constructor (
    private http: HttpClient,
    private api: ApiService
  ){}
  loanApplications:any = [];
  ngOnInit(){
    this.http.post(`${this.api.apiUrl}api/loanApplications`, {}).subscribe((response:any)=>{
      if(response.success){
        this.loanApplications = response.details;
      }
    })
  }
}
