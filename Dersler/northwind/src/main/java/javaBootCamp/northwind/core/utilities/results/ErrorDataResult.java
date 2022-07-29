package javaBootCamp.northwind.core.utilities.results;

public class ErrorDataResult<T> extends DataResult {

	public ErrorDataResult(T data, String messages) {
		super(data,true, messages);
		// TODO Auto-generated constructor stub
	}
	
	public ErrorDataResult(T data) {
		super(data,true);
		// TODO Auto-generated constructor stub
	}
	
	public ErrorDataResult() {
		super(null,true);
		// TODO Auto-generated constructor stub
	}

}
