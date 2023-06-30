package com.example.ExpenseTrackerBackend.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.ExpenseTrackerBackend.exception.ExpenseNotFoundException;
import com.example.ExpenseTrackerBackend.model.Expense;
import com.example.ExpenseTrackerBackend.repository.ExpenseRepository;

@RestController
@CrossOrigin("http://expense-tracker-frontend:3000/")

public class ExpenseController {
	
	@Autowired
	private ExpenseRepository expenseRepository;
	@PostMapping("/expense")
	Expense newExpense(@RequestBody Expense newExpense) {
	
		return expenseRepository.save(newExpense);
	}
	
	@GetMapping("/expenses")
	
	List<Expense> getAllExpenses(){
		
		return expenseRepository.findAll();
	}
	
	@GetMapping("/expense/{id}")
	Expense getExpenseById(@PathVariable Long id) {
		return expenseRepository.findById(id)
		.orElseThrow(()->new ExpenseNotFoundException(id));
	}
	
	@PutMapping("/expense/{id}")
	Expense updateExpense(@RequestBody Expense newExpense,@PathVariable Long id) {
		return expenseRepository.findById(id)
				.map(expense -> {
					expense.setCategory(newExpense.getCategory());
					expense.setDescription(newExpense.getDescription());
					expense.setAmount(newExpense.getAmount());
					return expenseRepository.save(expense);
				}).orElseThrow(()->new ExpenseNotFoundException(id));
	}
	
	@DeleteMapping("/expense/{id}")
	String deleteExpense(@PathVariable Long id) {
		if(!expenseRepository.existsById(id)) {
			throw new ExpenseNotFoundException(id);
		}
		expenseRepository.deleteById(id);
		return "Expense has been deleted Succesfully!!";
		
	}
	
}

