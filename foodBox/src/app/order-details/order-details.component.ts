import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Order } from '../order';
import { Customer } from '../customer';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private service :ApiServiceService) { }
   orderId :string;
   orderdata:Order;
   user : Customer;
  ngOnInit(): void {
    this.orderId = sessionStorage.getItem("orderId");
    //alert("orderId"+ this.orderId);
    this.service.getOrder(this.orderId).subscribe(
      data =>{
       this.orderdata = data;
      }
    );

    this.service.getUserById(sessionStorage.getItem("userId")).subscribe(
      data =>
      {
        this.user = data;
      }
    );


  }

}
