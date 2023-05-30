package com.food.kitchen.repo;

import com.food.kitchen.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepo extends JpaRepository<Category,Integer> {
   List<Category> findAllByCategoryNameIgnoreCase(String categoryName);

}
