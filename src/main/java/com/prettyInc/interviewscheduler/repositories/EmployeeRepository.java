package com.prettyInc.interviewscheduler.repositories;

import com.prettyInc.interviewscheduler.models.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {}