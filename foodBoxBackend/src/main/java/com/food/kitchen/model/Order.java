package com.food.kitchen.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name="Order_Details")
@Data
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String orderId;
    @JsonIgnore
    @OneToMany(mappedBy = "order")
    //@JoinColumn(name="foodId", referencedColumnName = "foodId")
    private List<Food> foodList;


    private Double bill;
    @OneToOne
    @JoinColumn(name = "customer_Id", referencedColumnName = "customerId")
    private Customer customer;
    @OneToOne(mappedBy = "order")
    private Payment payment;
    //how to add multiple food items ?

}
