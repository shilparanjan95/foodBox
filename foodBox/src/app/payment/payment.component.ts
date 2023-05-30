import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
bill:string;
msg :string=null;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.bill = sessionStorage.getItem("bill");
  }


  showMessage()
  {
    this.msg ="Payment Completed Successfully ";

    this.router.navigate(['orderDetails']);
    
  }
}
