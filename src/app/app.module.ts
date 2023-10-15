import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './includes/nav/contact-us/contact-us.component';
import { OpenAnAccountComponent } from './includes/nav/open-an-account/open-an-account.component';
import { ApplyForLoanComponent } from './includes/nav/apply-for-loan/apply-for-loan.component';
import { AboutUsComponent } from './includes/nav/about-us/about-us.component';
import { HomeComponent } from './includes/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OffersComponent } from './includes/extra/offers/offers.component';
import { OnlineLoginComponent } from './includes/home/online-login/online-login.component';
import { AutoCounterComponent } from './includes/home/extra/auto-counter/auto-counter.component';
import { BestServicesComponent } from './includes/home/extra/best-services/best-services.component';
import { FooterComponent } from './includes/footer/footer.component';
import { MakesOutBestComponent } from './includes/home/extra/makes-out-best/makes-out-best.component';
import { BankAdminComponent } from './bank-admin/bank-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './includes/home/online-login/login/login.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { ForgotPasswordComponent } from './includes/home/online-login/forgot-password/forgot-password.component';
import { SearchComponent } from './includes/extra/search/search.component';
import { UserManagementComponent } from './bank-admin/user-management/user-management.component';
import { AppRoutingModule } from './app-routing.module';
import { AddaccountComponent } from './bank-admin/user-management/addaccount/addaccount.component';
import { AddadminComponent } from './bank-admin/user-management/addadmin/addadmin.component';
import { ChangeuserdetailsComponent } from './bank-admin/user-management/extra/changeuserdetails/changeuserdetails.component';
import { TransactionManagementComponent } from './bank-admin/user-management/extra/transaction-management/transaction-management.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { NotFoundComponent } from './not-found/not-found.component';
import { PrivacyPolicyComponent } from './includes/nav/policies/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './includes/nav/policies/terms-conditions/terms-conditions.component';
import { TransferMoneyComponent } from './user-interface/transfer-money/transfer-money.component';
import { PassbookComponentComponent } from './user-interface/passbook-component/passbook-component.component';
import { AccessContactFormsComponent } from './bank-admin/user-management/extra/access-contact-forms/access-contact-forms.component';
import { AccessLoanAppliedComponent } from './bank-admin/user-management/extra/access-loan-applied/access-loan-applied.component';
import { NewApplicationsComponent } from './bank-admin/user-management/extra/new-applications/new-applications.component';

@NgModule({
  declarations: [AppComponent, ContactUsComponent, OpenAnAccountComponent, ApplyForLoanComponent, AboutUsComponent, HomeComponent,  OffersComponent, OnlineLoginComponent, AutoCounterComponent, BestServicesComponent, FooterComponent, MakesOutBestComponent, BankAdminComponent, LoginComponent, UserInterfaceComponent, ForgotPasswordComponent, SearchComponent, UserManagementComponent, AddaccountComponent, AddadminComponent, ChangeuserdetailsComponent, TransactionManagementComponent, NotFoundComponent, PrivacyPolicyComponent, TermsConditionsComponent, TransferMoneyComponent, PassbookComponentComponent, AccessContactFormsComponent, AccessLoanAppliedComponent, NewApplicationsComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, MatDatepickerModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {

 }
