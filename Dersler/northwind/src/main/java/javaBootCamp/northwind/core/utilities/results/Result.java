package javaBootCamp.northwind.core.utilities.results;

public class Result {
	private boolean success;
	private String message;
	
	public Result(boolean success) {
		// TODO Auto-generated constructor stub
		this.success = success;
	}
	public Result(boolean success, String message ) {
		// TODO Auto-generated constructor stub
		this(success);
		this.message = message;
	}
	public boolean isSuccess() {
		return this.success;
	}
	
	public String getMessage() {
		return this.message;
		
	}
	
}
