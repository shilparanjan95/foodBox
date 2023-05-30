import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Order } from '../order';
import { Food } from '../food';
import { Customer } from '../customer';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private router:Router,private aroute:ActivatedRoute,private formBuilder:FormBuilder,private service:ApiServiceService) { }
  foodId:number
  foodList:Food[] = [];
  user:Customer;
  billable:string;
  ngOnInit(): void {

    //alert("food Id  is "+this.aroute.snapshot.params['foodId']);
    this.foodId = this.aroute.snapshot.params['foodId'];
    this.loadData();
   
    
  }
  loadData()
  {
      this.service.getFoodById(this.foodId+"").subscribe(
        data =>
        {
          this.foodList.push(data);
        }
      );
      this.service.getUserById(sessionStorage.getItem("userId")).subscribe(
        data =>
        {
          this.user = data;
        }
      );
  }
  foodForm =  this.formBuilder.group(
    {
      quantity: this.formBuilder.control('',Validators.required),
      totalBill: this.formBuilder.control('')
    }
  );
   order:Order;
   orderForFood:Order;
   food:Food;
  orderFood()
  {
   
   this.foodForm.value.totalBill = this.foodForm.value.quantity * parseFloat(this.foodList[0].foodPrice);

    this.order = new Order(this.foodList,this.foodForm.value.quantity,this.foodForm.value.totalBill+"",this.user);
 
   sessionStorage.setItem("bill",this.foodForm.value.totalBill);
   // alert(JSON.stringify(this.order));
    this.service.saveOrder(this.order).subscribe(
      data => {
       alert("Redirecting to Payment Page !");
       sessionStorage.setItem("orderId",data.orderId);
    
      
       this.router.navigate(['pay']);
      }
    );
  }

  bill()
  {   alert("Fetching Bill Details !");
      this.foodForm.value.totalBill = this.foodForm.value.quantity * parseFloat(this.foodList[0].foodPrice);
      if(this.foodForm.value.totalBill == 0)
      {
        alert("Enter Quantity pls");
      }
      this.billable =  this.foodForm.value.totalBill;
      //alert(this.foodForm.value.totalBill);
  }
}
