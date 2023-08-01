package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import model.StudentModel;
import utility.ConnectionManager;

public class StudentDao extends GetConnection {

    Connection connection = null;

    @Override
    public Connection getDbConnection() throws ClassNotFoundException {
        Connection connection = ConnectionManager.getConnection();
        return connection;
    }

    public void addStudent(StudentModel student) {
        PreparedStatement preparedStatement = null;

        try {
            connection = getDbConnection();
            String query = "INSERT INTO students(studentId, studentName, studentAge, studentPhoneNo, studentDateOfBirth, studentEmail, studentAddress, studentBGrp) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, student.getStudentId());
            preparedStatement.setString(2, student.getStudentName());
            preparedStatement.setString(3, student.getStudentAge());
            preparedStatement.setString(4, student.getStudentPhoneNo());
            preparedStatement.setString(5, student.getStudentDateOfBirth());
            preparedStatement.setString(6, student.getStudentEmail());
            preparedStatement.setString(7, student.getStudentAddress());
            preparedStatement.setString(8, student.getStudentBGrp());

            preparedStatement.executeUpdate();
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if (preparedStatement != null) {
                    preparedStatement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    public ArrayList<StudentModel> getAllStudents() {
        ArrayList<StudentModel> students = new ArrayList<>();

        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

        try {
            connection = getDbConnection();
            String query = "SELECT * FROM students";
            preparedStatement = connection.prepareStatement(query);
            resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                int studentId = resultSet.getInt("studentId");
                String studentName = resultSet.getString("studentName");
                String studentAge = resultSet.getString("studentAge");
                String studentPhoneNo = resultSet.getString("studentPhoneNo");
                String studentDateOfBirth = resultSet.getString("studentDateOfBirth");
                String studentEmail = resultSet.getString("studentEmail");
                String studentAddress = resultSet.getString("studentAddress");
                String studentBGrp = resultSet.getString("studentBGrp");

                StudentModel student = new StudentModel(studentId, studentName, studentAge, studentPhoneNo,
                        studentDateOfBirth, studentEmail, studentAddress, studentBGrp);
                students.add(student);
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if (resultSet != null) {
                    resultSet.close();
                }
                if (preparedStatement != null) {
                    preparedStatement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        return students;
    }

    public StudentModel getStudentById(int studentId) {

        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

        try {
            connection = getDbConnection();
            String query = "SELECT * FROM students WHERE studentId = ?";
            preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, studentId);

            resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                String studentName = resultSet.getString("studentName");
                String studentAge = resultSet.getString("studentAge");
                String studentPhoneNo = resultSet.getString("studentPhoneNo");
                String studentDateOfBirth = resultSet.getString("studentDateOfBirth");
                String studentEmail = resultSet.getString("studentEmail");
                String studentAddress = resultSet.getString("studentAddress");
                String studentBGrp = resultSet.getString("studentBGrp");

                return new StudentModel(studentId, studentName, studentAge, studentPhoneNo,
                        studentDateOfBirth, studentEmail, studentAddress, studentBGrp);
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if (resultSet != null) {
                    resultSet.close();
                }
                if (preparedStatement != null) {
                    preparedStatement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        return null;
    }

    public void updateStudent(StudentModel student) {

        PreparedStatement preparedStatement = null;

        try {
            connection = getDbConnection();
            String query = "UPDATE students SET studentName = ?, studentAge = ?, studentPhoneNo = ?, studentDateOfBirth = ?, studentEmail = ?, studentAddress = ?, studentBGrp = ? WHERE studentId = ?";
            preparedStatement = connection.prepareStatement(query);
            preparedStatement.setString(1, student.getStudentName());
            preparedStatement.setString(2, student.getStudentAge());
            preparedStatement.setString(3, student.getStudentPhoneNo());
            preparedStatement.setString(4, student.getStudentDateOfBirth());
            preparedStatement.setString(5, student.getStudentEmail());
            preparedStatement.setString(6, student.getStudentAddress());
            preparedStatement.setString(7, student.getStudentBGrp());
            preparedStatement.setInt(8, student.getStudentId());

            preparedStatement.executeUpdate();
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if (preparedStatement != null) {
                    preparedStatement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

   
    
}
