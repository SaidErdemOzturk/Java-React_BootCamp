package javaReact_BootCamp.hrms.core.utilites.result;

public class SuccessDataResult<T> extends DataResult{

	public SuccessDataResult(T data, String message) {
		super(data, true, message);
		// TODO Auto-generated constructor stub
	}
	
	
	public SuccessDataResult(String message) {
		super(null, true, message);
		// TODO Auto-generated constructor stub
	}
	public SuccessDataResult() {
		super(null,true);
		// TODO Auto-generated constructor stub
	}
	

}
