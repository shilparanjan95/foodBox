import { Category } from "./category";
import { Order } from "./order";

export class Food {

      private  foodId:number;
      private  foodName:string;
      private  foodCategory:string;
       foodPrice:string;
      private category :Category
      quantity:number;
      order:Order;
      img:string;
      constructor(foodName:string,foodCategory:string,foodPrice:string,category:Category)
      {
          this.foodName = foodName;
          this.foodCategory = foodCategory;
          this.foodPrice = foodPrice;
          this.category = category;
      }
      setOrder(order:Order)
      {
         this.order = order;
      }
}
