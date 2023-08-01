package model;

public class AcademicModel {
    private int studentId;
    private String studentClass;
    private String studentCourse;
    private String studentAttendence;
    private String studentPYear;
    private String studentSYear;
    private double studentCgpa;
	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	public String getStudentClass() {
		return studentClass;
	}
	public void setStudentClass(String studentClass) {
		this.studentClass = studentClass;
	}
	public String getStudentCourse() {
		return studentCourse;
	}
	public void setStudentCourse(String studentCourse) {
		this.studentCourse = studentCourse;
	}
	public String getStudentAttendence() {
		return studentAttendence;
	}
	public void setStudentAttendence(String studentAttendence) {
		this.studentAttendence = studentAttendence;
	}
	public String getStudentPYear() {
		return studentPYear;
	}
	public void setStudentPYear(String studentPYear) {
		this.studentPYear = studentPYear;
	}
	public String getStudentSYear() {
		return studentSYear;
	}
	public void setStudentSYear(String studentSYear) {
		this.studentSYear = studentSYear;
	}
	public double getStudentCgpa() {
		return studentCgpa;
	}
	public void setStudentCgpa(double studentCgpa) {
		this.studentCgpa = studentCgpa;
	}
	public AcademicModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AcademicModel(int studentId, String studentClass, String studentCourse, String studentAttendence,
			String studentPYear, String studentSYear, double studentCgpa) {
		super();
		this.studentId = studentId;
		this.studentClass = studentClass;
		this.studentCourse = studentCourse;
		this.studentAttendence = studentAttendence;
		this.studentPYear = studentPYear;
		this.studentSYear = studentSYear;
		this.studentCgpa = studentCgpa;
	}
}
