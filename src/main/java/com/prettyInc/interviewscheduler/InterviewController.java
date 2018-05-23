package com.prettyInc.interviewscheduler;

import com.prettyInc.interviewscheduler.models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import com.prettyInc.interviewscheduler.repositories.EmployeeRepository;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Controller
public class InterviewController {

    @Autowired
    EmployeeRepository repository;

    @RequestMapping(value="/all")
    public String index(){
        return "index.html";
    }

    @GetMapping(value="/employees", produces = "application/json")
    public List<Employee> getEmployees(){

//        this.repository.save(new Employee("Joe Biden", 45, 5));
//        this.repository.save(new Employee("President Obama", 54, 8));
//        this.repository.save(new Employee("Crystal Mac", 34, 12));
//        this.repository.save(new Employee("James Henry", 33, 2));
//        this.repository.save(new Employee("Pretty Jose", 33, 2));
        Iterator<Employee> iterator = repository.findAll().iterator();
        List<Employee> employess = new ArrayList<Employee>();
        while(iterator.hasNext())
            employess.add(iterator.next());
        return employess;
    }

    @PostMapping(value="/create", consumes = "application/json")
    public Employee crateEmployee(@RequestBody Employee emp){

        return repository.save(emp);
    }
}
