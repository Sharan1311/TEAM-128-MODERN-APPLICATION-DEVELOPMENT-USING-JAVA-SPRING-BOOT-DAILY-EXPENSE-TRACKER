package com.example.ExpenseTrackerBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.ExpenseTrackerBackend.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {

}