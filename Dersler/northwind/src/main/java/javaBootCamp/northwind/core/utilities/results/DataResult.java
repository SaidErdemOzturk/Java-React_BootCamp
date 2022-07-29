package javaBootCamp.northwind.core.utilities.results;

public class DataResult<T> extends Result {

	private T data;
	public DataResult(T data,boolean success, String messages) {
		super(success, messages);
		// TODO Auto-generated constructor stub
		this.data =data;
	}
	public DataResult(T data,boolean success) {
		super(success);
		this.data = data;
	}
	public T getData() {
		return this.data;
	}

}
