import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms'
import { ApiServiceService } from '../api-service.service';
import { Customer } from '../customer';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  constructor(private builder:FormBuilder,private service:ApiServiceService,
    private router:Router) { }

  ngOnInit(): void {
  }
   customer :Customer;
  custForm =  this.builder.group(
    {
      name : this.builder.control('',Validators.required),
      email : this.builder.control('',Validators.email),
      password : this.builder.control('',Validators.required)
    }
  )
  ;

  saveUser()

  {
    this.customer = new Customer(this.custForm.value.name,this.custForm.value.email,this.custForm.value.password);

    this.service.saveUser(this.customer).subscribe(
      data =>{
        alert("Details saved");
      }
    );
    this.custForm.reset();
    this.router.navigate(['login']);
  }

}
