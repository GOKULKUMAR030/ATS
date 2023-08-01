package service;

import java.util.ArrayList;
import dao.AcademicDao;
import model.AcademicModel;

public class AcademicService {

    private AcademicDao academicDao;

    public AcademicService() {
        academicDao = new AcademicDao();
    }

    public void addStudent(AcademicModel academic) {
        academicDao.addStudent(academic);
    }

    public ArrayList<AcademicModel> getAllStudents() {
        return academicDao.getAllStudents();
    }

    public AcademicModel getStudentById(int studentId) {
        return academicDao.getStudentById(studentId);
    }

    public void updateStudent(AcademicModel academic) {
        academicDao.updateStudent(academic);
    }

  
    public ArrayList<AcademicModel> getStudentsByCourse(String course) {
    	return academicDao.getStudentsByCourse(course);
    }
}
