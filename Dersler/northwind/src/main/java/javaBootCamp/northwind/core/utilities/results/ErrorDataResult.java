package javaBootCamp.northwind.core.utilities.results;

public class ErrorDataResult<T> extends DataResult {

	public ErrorDataResult(T data, String messages) {
		super(data,false, messages);
		// TODO Auto-generated constructor stub
	}
	
	public ErrorDataResult(T data) {
		super(data,false);
		// TODO Auto-generated constructor stub
	}
	
	public ErrorDataResult() {
		super(null,false);
		// TODO Auto-generated constructor stub
	}

}
