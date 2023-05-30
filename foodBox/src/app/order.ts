import { Customer } from "./customer";
import { Food } from "./food";

export class Order {

    orderId:string;
    foodList:Food[];
    quantity:number;
    bill:string;
    customer:Customer;

    constructor(foodList:Food[],quantity:number,bill:string,customer:Customer)
    {
        this.foodList = foodList;
        this.quantity = quantity;
        this.bill = bill;
        this.customer = customer;

    }



}
