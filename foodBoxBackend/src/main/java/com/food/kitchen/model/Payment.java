package com.food.kitchen.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="Payment")
@Data
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
     private String paymentId;
     private String paymentDate;
     @OneToOne
     @JoinColumn(name="order_id",referencedColumnName = "orderId")
     private Order order;
}
