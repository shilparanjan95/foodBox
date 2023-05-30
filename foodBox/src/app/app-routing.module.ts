import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFoodComponent } from './add-food/add-food.component';
import { ViewFoodComponent } from './view-food/view-food.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { LoginGuard } from './login.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {path:"addFood",component:AddFoodComponent,canActivate:[LoginGuard]},
  {path:"viewAllFood",component:ViewFoodComponent,canActivate:[LoginGuard]},
  {path:"addCategory",component: CategoryComponent,canActivate:[LoginGuard]},
  {path:"home",component:HomeComponent,canActivate:[LoginGuard]},
  {path:"order/:foodId",component:OrderComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterCustomerComponent},
  {path:"pay",component:PaymentComponent,canActivate:[LoginGuard]},
  {path:"orderDetails",component:OrderDetailsComponent,canActivate:[LoginGuard]},
  {path:"changePassword",component:ChangePasswordComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
