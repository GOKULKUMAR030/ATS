package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import model.AcademicModel;
import utility.ConnectionManager;

public class AcademicDao {

    Connection connection = null;

    public Connection getDbConnection() throws ClassNotFoundException {
        Connection connection = ConnectionManager.getConnection();
        return connection;
    }

    public void addStudent(AcademicModel academic) {
        PreparedStatement preparedStatement = null;

        try {
            connection = getDbConnection();
            String query = "INSERT INTO academic_details(studentId, studentClass, studentCourse, studentAttendance, studentPYear, studentSYear, studentCgpa) VALUES (?, ?, ?, ?, ?, ?, ?)";
            preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, academic.getStudentId());
            preparedStatement.setString(2, academic.getStudentClass());
            preparedStatement.setString(3, academic.getStudentCourse());
            preparedStatement.setString(4, academic.getStudentAttendence());
            preparedStatement.setString(5, academic.getStudentPYear());
            preparedStatement.setString(6, academic.getStudentSYear());
            preparedStatement.setDouble(7, academic.getStudentCgpa());

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

    public ArrayList<AcademicModel> getAllStudents() {
        ArrayList<AcademicModel> academicDetails = new ArrayList<>();

        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

        try {
            connection = getDbConnection();
            String query = "SELECT * FROM academic_details";
            preparedStatement = connection.prepareStatement(query);
            resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                int studentId = resultSet.getInt("studentId");
                String studentClass = resultSet.getString("studentClass");
                String studentCourse = resultSet.getString("studentCourse");
                String studentAttendance = resultSet.getString("studentAttendance");
                String studentPYear = resultSet.getString("studentPYear");
                String studentSYear = resultSet.getString("studentSYear");
                double studentCgpa = resultSet.getDouble("studentCgpa");

                AcademicModel academic = new AcademicModel(studentId, studentClass, studentCourse, studentAttendance,
                        studentPYear, studentSYear, studentCgpa);
                academicDetails.add(academic);
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

        return academicDetails;
    }

    public AcademicModel getStudentById(int studentId) {
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

        try {
            connection = getDbConnection();
            String query = "SELECT * FROM academic_details WHERE studentId = ?";
            preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, studentId);

            resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                String studentClass = resultSet.getString("studentClass");
                String studentCourse = resultSet.getString("studentCourse");
                String studentAttendance = resultSet.getString("studentAttendance");
                String studentPYear = resultSet.getString("studentPYear");
                String studentSYear = resultSet.getString("studentSYear");
                double studentCgpa = resultSet.getDouble("studentCgpa");

                return new AcademicModel(studentId, studentClass, studentCourse, studentAttendance,
                        studentPYear, studentSYear, studentCgpa);
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

    public void updateStudent(AcademicModel academic) {
        PreparedStatement preparedStatement = null;

        try {
            connection = getDbConnection();
            String query = "UPDATE academic_details SET studentClass = ?, studentCourse = ?, studentAttendance = ?, studentPYear = ?, studentSYear = ?, studentCgpa = ? WHERE studentId = ?";
            preparedStatement = connection.prepareStatement(query);
            preparedStatement.setString(1, academic.getStudentClass());
            preparedStatement.setString(2, academic.getStudentCourse());
            preparedStatement.setString(3, academic.getStudentAttendence());
            preparedStatement.setString(4, academic.getStudentPYear());
            preparedStatement.setString(5, academic.getStudentSYear());
            preparedStatement.setDouble(6, academic.getStudentCgpa());
            preparedStatement.setInt(7, academic.getStudentId());

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

    

    public ArrayList<AcademicModel> getStudentsByCourse(String course) {
        ArrayList<AcademicModel> academicDetails = new ArrayList<>();

        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

        try {
            connection = getDbConnection();
            String query = "SELECT * FROM academic_details WHERE studentCourse = ?";
            preparedStatement = connection.prepareStatement(query);
            preparedStatement.setString(1, course);
            resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                int studentId = resultSet.getInt("studentId");
                String studentClass = resultSet.getString("studentClass");
                String studentCourse = resultSet.getString("studentCourse");
                String studentAttendance = resultSet.getString("studentAttendance");
                String studentPYear = resultSet.getString("studentPYear");
                String studentSYear = resultSet.getString("studentSYear");
                double studentCgpa = resultSet.getDouble("studentCgpa");

                AcademicModel academic = new AcademicModel(studentId, studentClass, studentCourse, studentAttendance,
                        studentPYear, studentSYear, studentCgpa);
                academicDetails.add(academic);
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

        return academicDetails;
    }

}
