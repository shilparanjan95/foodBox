import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Food } from '../food';
import {FormBuilder,Validators} from '@angular/forms'
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 showTable = true;
 foods:Food[];
  constructor(private service :ApiServiceService,private builder:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    //this.search();
  }
  searchForm =  this.builder.group(
  {
   cat : this.builder.control('',Validators.required)
  });
  msg :string=null;
  search()

  {
    
    console.log("inside search");
   
     this.service.findByCat(this.searchForm.value.cat).subscribe(
      data => {this.foods = data;}
    )
   /*  if (this.foods == undefined || this.foods.length == 0)
     { 
       this.msg = "No food available with filter "+this.searchForm.value.cat+" try something new !";
         alert(this.msg);

      this.showTable = false;
     }
     else{
      this.showTable = true;
     } */
  }
  orderFood(foodId:string)
  {
     //alert("order for "+foodId);
     if(sessionStorage.getItem("userName")!= null)
      {this.router.navigate(['order',foodId]);
      }
   else {
    alert("First Login To order");
    this.router.navigate(['login']);
   }
  }
}
