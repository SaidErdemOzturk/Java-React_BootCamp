package javaBootCamp.northwind.core.utilities.results;

public class SuccessDataResult<T> extends DataResult {

	public SuccessDataResult(T data, String messages) {
		super(data,true, messages);
		// TODO Auto-generated constructor stub
	}
	
	public SuccessDataResult(T data) {
		super(data,true);
		// TODO Auto-generated constructor stub
	}
	
	public SuccessDataResult() {
		super(null,true);
		// TODO Auto-generated constructor stub
	}

}
