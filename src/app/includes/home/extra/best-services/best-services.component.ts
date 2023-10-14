import { Component } from '@angular/core';

@Component({
  selector: 'app-best-services',
  templateUrl: './best-services.component.html',
  styleUrls: ['./best-services.component.css'],
})
export class BestServicesComponent {
  services=[
    {imagePath:"assets/images/MobileBanking.png",service:"Mobile Banking", serviceDesc:"Experience the convenience of banking on the go with International Bank's mobile app. Our cutting-edge mobile banking solution puts the power of financial management right at your fingertips. Whether you want to check your account balances, transfer funds, pay bills, or set budget goals, our user-friendly app makes it effortless.", alt:"Mobile Banking"},
    {imagePath:"assets/images/OnlineStore.png",service:"Online Businesses", serviceDesc:"Unlock the potential of your business with International Bank's comprehensive online business solutions. Seamlessly manage your finances, streamline transactions, and take your business to new heights with our cutting-edge online banking platform. From checking real-time balances to conducting secure fund transfers, our user-friendly interface ensures efficiency and convenience.", alt:"Online Business"},
    {imagePath:"assets/images/HouseLoan.png",service:"Home Loan", serviceDesc:"Owning your dream home is now within reach with International Bank's tailored home loan solutions. Our expertise in the housing market and commitment to customer satisfaction make us the ideal partner for your homeownership journey.", alt:"Home Loan"},
    {imagePath:"assets/images/MasterCard.png",service:"Your Master Card", serviceDesc:"Unlock a world of financial possibilities with the International Bank Mastercard. As a global leader in banking, we bring you a credit card that offers unparalleled convenience and security for all your transactions.", alt:"Your Master Card"},
    {imagePath:"assets/images/MoneyExchange.png",service:"Money Exchange", serviceDesc:"Make your international travel and business transactions hassle-free with International Bank's currency exchange services. We understand the importance of convenient and reliable money exchange for our customers, whether you're planning a trip abroad or conducting cross-border business.", alt:"Money Exchange"},
    {imagePath:"assets/images/OthersLoan.png",service:"Others Loan", serviceDesc:"At International Bank, we understand that life is full of opportunities and challenges. That's why we offer a range of loan solutions to suit your unique needs and empower you to seize every moment.  Whether you're dreaming of a new car, planning a home renovation, or seeking to consolidate your debts, our diverse loan options cater to various financial goals.", alt:"OthersLoan"},
  ]
}
