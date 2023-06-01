import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Food } from './food';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from './category';
import { Customer } from './customer';
import { Order } from './order';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient:HttpClient) { }
  foodList:Food[]
  foodUrl ="http://localhost:9090/app/foodie/food";
  categoryUrl ="http://localhost:9090/app/foodie/category";
  customerUrl ="http://localhost:9090/app/foodie/customer";
  orderUrl ="http://localhost:9090/app/foodie/order";
  getFood = "http://localhost:9090/app/foodie/foodById" ;

  saveFood( food:Food) :Observable<Object>
  { 
    return this.httpClient.post(this.foodUrl,food);
   
  }
  
getCategory() :Observable<Category[]>
  {  
      return this.httpClient.get<Category[]>(`${this.categoryUrl}`);
  }

  getFoodItems() :Observable<Food[]>
  {
   return this.httpClient.get<Food[]>(`${this.foodUrl}`);
  }



   deleteFood(id:number) :Observable<string>
  {
     return this.httpClient.delete<string>(this.foodUrl+"/"+id);
  }

  addCategory(cat:Category)
  {
    return this.httpClient.post(this.categoryUrl,cat);
  }
  findByCat(cat:string) :Observable<Food[]>
  {
    return this.httpClient.get<Food[]>(this.foodUrl+"/"+cat);
  }

 saveUser(customer:Customer) : Observable<Customer>
  {
   
    return this.httpClient.post<Customer>(this.customerUrl, customer);
  }
  getUsers() : Observable<Customer[]>
  {
   
    return this.httpClient.get<Customer[]>(this.customerUrl);
  }


  checkLogin(customers:Customer[],mail :string,pswd:string):Customer
  {


    for(let i  = 0;i<customers.length;i++)
    {

      if(customers[i].email ==mail && customers[i].password== pswd)
      {
      return customers[i];
      }
    }
    return null;
  }

  getUserById(id:string) : Observable<Customer>
  {
   
    return this.httpClient.get<Customer>(this.customerUrl+"/"+id);
  }

  getFoodById(id:string) : Observable<Food>
  {
   
    return this.httpClient.get<Food>(this.getFood+"/"+id);
  }
  getOrder(id:string) : Observable<Order>
  {
      //alert("getting order");
    return this.httpClient.get<Order>(this.orderUrl+"/"+id);
  }

  saveOrder(order:Order) : Observable<Order>
  {
   
    return this.httpClient.post<Order>(this.orderUrl, order);
  }

  activate(id:number) :Observable<string>
  {

    return this.httpClient.get<string>(this.foodUrl+"/activate/"+id);
  }
}
