package com.food.kitchen.repo;

import com.food.kitchen.model.Category;
import com.food.kitchen.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FoodRepo extends JpaRepository<Food,Integer> {
    List<Food> findAllByFoodNameIgnoreCase(String name);
    List<Food> findAllByFoodCategoryIgnoreCase(String name);

    List<Food>  findByCategory(Category category);
}
