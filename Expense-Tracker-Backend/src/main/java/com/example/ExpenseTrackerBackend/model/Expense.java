package com.example.ExpenseTrackerBackend.model;

import jakarta.persistence.*;



@Entity
public class Expense {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private String category;
	
	private String description;
	
	private Long amount;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getAmount() {
		return amount;
	}

	public void setAmount(Long amount) {
		this.amount = amount;
	}
	
	

}
