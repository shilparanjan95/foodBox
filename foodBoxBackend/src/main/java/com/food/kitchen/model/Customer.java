package com.food.kitchen.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
@Data
@Entity
@Table(name="Customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerId;
    @JsonIgnore
    @OneToMany(mappedBy = "customer")
    private List<Order> order;
    private String name;
    private String email;
    private String password;

}
