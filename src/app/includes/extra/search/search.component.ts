import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = "";
  params: any = {
    loan: {
      text: 'Apply For Loan',
      link: '/apply-for-loan'
    },
    offers: {
      text: 'Offers',
      link: '/offers'
    },
    contact: {
      text: 'Contact Us',
      link: 'contact-us'
    },
    login: {
      text: 'Login to account',
      link: '/login'
    },
    register: {
      text: 'Register to the Bank',
      link: '/register'
    },
    terms: {
      text: 'Terms and Conditions',
      link: '/terms'
    },
    policy: {
      text: 'Privacy Policy',
      link: '/privacy-policy'
    }
  };

  paramsArray: any[] = Object.keys(this.params).map(key => ({
    key: key,
    value: this.params[key]
  }));

  resultList: any[] = [];

  search() {
    this.resultList = [];
    const lowerCaseQuery = this.query.toLowerCase();
    this.paramsArray.forEach(param => {
      if (param.value.text.toLowerCase().includes(lowerCaseQuery)) {
        this.resultList.push(param);
      }
    });
  }
  wrapperVisible: boolean = false;

  showWrapper() {
    setTimeout(() => {
      this.wrapperVisible = true;
    }, 1000);
  }

  hideWrapper() {
    setTimeout(() => {
      this.wrapperVisible = false;
    }, 1000);
  }
}