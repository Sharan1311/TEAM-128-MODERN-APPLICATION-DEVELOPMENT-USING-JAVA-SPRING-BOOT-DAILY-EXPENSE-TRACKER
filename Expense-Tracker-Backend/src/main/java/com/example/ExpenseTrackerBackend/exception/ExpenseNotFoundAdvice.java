package com.example.ExpenseTrackerBackend.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class ExpenseNotFoundAdvice {
	
	
	@ResponseBody
	@ExceptionHandler(ExpenseNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	
	public Map<String, String> exceptionHandler(ExpenseNotFoundException exception){
		
		Map<String, String> errorMap = new HashMap<>();
		
		errorMap.put("errorMessage",exception.getMessage());

		return errorMap;
}
}