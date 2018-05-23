package com.prettyInc.interviewscheduler.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Data
@Entity
public class Employee {

    private @Id
    @GeneratedValue
    Long id;

    public String getName() {
        return name;
    }

    private String name;
    private int age;
    private int years;

    private Employee() {}

    public Employee(String name, int age, int years) {
        this.name = name;
        this.age = age;
        this.years = years;
    }
}