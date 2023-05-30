package com.food.kitchen;

public class FoodNotFoundException extends RuntimeException{

    public FoodNotFoundException(String msg)
    {
        super(msg);
    }

}
