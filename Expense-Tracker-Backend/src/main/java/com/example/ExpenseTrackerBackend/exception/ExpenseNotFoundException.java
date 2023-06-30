package com.example.ExpenseTrackerBackend.exception;

public class ExpenseNotFoundException extends RuntimeException{

	public ExpenseNotFoundException(Long id) {
		super("Could not find the expense with id" + id);
	}
}
