import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-transaction-management',
  templateUrl: './transaction-management.component.html',
  styleUrls: ['./transaction-management.component.css']
})

export class TransactionManagementComponent {
  constructor (
    private http: HttpClient,
    private api: ApiService
  ){}
  credit:boolean = false;
  details:any = {
    accountnumber: '',
    amount: '',
    description: '',
    credit: false,
    debit: true,
  }

    submitTransaction(){
      this.details.credit = this.credit;
      this.details.debit = !this.credit;
      
      this.http.post(`${this.api.apiUrl}api/user/addTransaction`, this.details).subscribe(
        (response:any) => {
          if(response.success){
            alert("Successful")
            this.details.accountnumber ='';
            this.details.amount = '';
            this.details.description ='';
          }else{
            alert("Please check details or try again later.")
          }
        }
      )
    }
}