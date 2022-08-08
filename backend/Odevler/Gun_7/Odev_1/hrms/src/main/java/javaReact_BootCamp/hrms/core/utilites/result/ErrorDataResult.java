package javaReact_BootCamp.hrms.core.utilites.result;

public class ErrorDataResult<T> extends DataResult{

	public ErrorDataResult(T data, String message) {
		super(data, false, message);
		// TODO Auto-generated constructor stub
	}
	
	public ErrorDataResult(T data) {
		super(data, false);
		// TODO Auto-generated constructor stub
	}
	
	public ErrorDataResult() {
		super(null, false);
		// TODO Auto-generated constructor stub
	}

}
