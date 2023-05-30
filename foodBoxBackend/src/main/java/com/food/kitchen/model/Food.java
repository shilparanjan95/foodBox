package com.food.kitchen.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.xml.catalog.Catalog;
import java.io.Serializable;

@Entity
@Table(name="Food")
@Data
public class Food  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer foodId;
    private String foodName;
    private String foodCategory;
    private String foodPrice;
    private Integer quantity;
    private String img;
    @OneToOne
    @JoinColumn(name = "category_Id",referencedColumnName = "categoryId")
    private Category category;
    @OneToOne
    @JoinColumn(name = "order_Id",referencedColumnName = "orderId")
    Order order;

}
