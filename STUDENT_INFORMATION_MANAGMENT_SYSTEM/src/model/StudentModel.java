package model;

public class StudentModel {
    private int studentId;
    private String studentName;
    private String studentAge;
    private String studentPhoneNo;
    private String studentDateOfBirth;
    private String studentEmail;
    private String studentAddress;
    private String studentBGrp;
	public StudentModel(int studentId, String studentName, String studentAge, String studentPhoneNo,
			String studentDateOfBirth, String studentEmail, String studentAddress, String studentBGrp) {
		super();
		this.studentId = studentId;
		this.studentName = studentName;
		this.studentAge = studentAge;
		this.studentPhoneNo = studentPhoneNo;
		this.studentDateOfBirth = studentDateOfBirth;
		this.studentEmail = studentEmail;
		this.studentAddress = studentAddress;
		this.studentBGrp = studentBGrp;
	}
	public StudentModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public String getStudentAge() {
		return studentAge;
	}
	public void setStudentAge(String studentAge) {
		this.studentAge = studentAge;
	}
	public String getStudentPhoneNo() {
		return studentPhoneNo;
	}
	public void setStudentPhoneNo(String studentPhoneNo) {
		this.studentPhoneNo = studentPhoneNo;
	}
	public String getStudentDateOfBirth() {
		return studentDateOfBirth;
	}
	public void setStudentDateOfBirth(String studentDateOfBirth) {
		this.studentDateOfBirth = studentDateOfBirth;
	}
	public String getStudentEmail() {
		return studentEmail;
	}
	public void setStudentEmail(String studentEmail) {
		this.studentEmail = studentEmail;
	}
	public String getStudentAddress() {
		return studentAddress;
	}
	public void setStudentAddress(String studentAddress) {
		this.studentAddress = studentAddress;
	}
	public String getStudentBGrp() {
		return studentBGrp;
	}
	public void setStudentBGrp(String studentBGrp) {
		this.studentBGrp = studentBGrp;
	}

}
