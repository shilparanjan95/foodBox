package com.food.kitchen.service;

import com.food.kitchen.FoodNotFoundException;
import com.food.kitchen.model.*;
import com.food.kitchen.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodAppService {

    @Autowired
    private CategoryRepo categoryRepo;

    @Autowired
    FoodRepo foodRepo;
    @Autowired
    CustomerRepo customerRepo;
    @Autowired
    OrderRepo orderRepo;
    @Autowired
    PaymentRepo paymentRepo;
    public Category saveCategory(Category category)
    {
    return categoryRepo.save(category);
    }

    public List<Category> listCategory()
    {
        return categoryRepo.findAll();
    }
    public List<Category> getCategoryByName(String name)
    {
        return categoryRepo.findAllByCategoryNameIgnoreCase(name);
    }

    public Food saveFood(Food food)
    {
        return foodRepo.save(food);
    }

    public List<Food> listFood()
    {
        return foodRepo.findAll();
    }

    public List<Food> listFoodByCategory(String category)
    {
        List<Food> foodList = foodRepo.findAllByFoodNameIgnoreCase(category);
        List<Food> foodListByCat = foodRepo.findAllByFoodCategoryIgnoreCase(category);
        if(!foodListByCat.isEmpty())
        {
            foodList.addAll(foodListByCat);
        }
        List<Category>  categoryList =  categoryRepo.findAllByCategoryNameIgnoreCase(category);

        if(categoryList!=null && !categoryList.isEmpty())
        {
            categoryList.forEach(
                    foodCategory ->
                    {
                       List<Food> foodItems =  foodRepo.findByCategory(foodCategory);
                       if(foodItems!=null && !foodItems.isEmpty())
                       {
                           foodList.addAll(foodItems);
                       }
                    }

            );
        }
        return foodList;
    }
   public void deleteFood(Integer id)
    {
        foodRepo.deleteById(id);
    }

    public Food updateFood(Food food,Integer id)
    {
        Food foodItem =  foodRepo.findById(id).orElseThrow(()-> new FoodNotFoundException("food with id : "+id+" is not found!"));
        foodItem.setFoodName(food.getFoodName());
        foodItem.setFoodPrice(food.getFoodPrice());
        return foodRepo.save(foodItem);
    }
    public Customer saveCustomer(Customer customer)
    {
        return customerRepo.save(customer);
    }

    public List<Customer> listCustomer()
    {
        return customerRepo.findAll();
    }
    public Order saveOrder(Order order)
    {
        return orderRepo.save(order);
    }
    public Payment savePayment(Payment payment)
    {
        return paymentRepo.save(payment);
    }


    public Customer findCustomer(Integer id) {
        return customerRepo.findById(id).get();
    }

    public Food findFood(Integer id) {
        return foodRepo.findById(id).get();
    }

    public Order getOrder(String id) {
         return orderRepo.findById(id).get();
    }

    public String activate(Integer id)
    { Food foodItem = foodRepo.findById(id).get();
      Boolean isActive =  foodRepo.findById(id).get().getIsActive();
        foodItem.setIsActive(!isActive);
        foodRepo.save(foodItem);
        return "Success";
    }

}
