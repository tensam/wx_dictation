package indi.cyken.domain;

public class WordLengType {
	private String lengtypeid;
	private String lengtypename;
	
	public WordLengType() {
		
	}
	
	
	public WordLengType(String lengtypeid) {
		super();
		this.lengtypeid = lengtypeid;
	}


	public String getLengtypeid() {
		return lengtypeid;
	}
	public void setLengtypeid(String lengtypeid) {
		this.lengtypeid = lengtypeid;
	}
	public String getLengtypename() {
		return lengtypename;
	}
	public void setLengtypename(String lengtypename) {
		this.lengtypename = lengtypename;
	}
	
	

}
