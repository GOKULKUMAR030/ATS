package controller;

import java.util.ArrayList;
import java.util.Scanner;

import dao.StudentDao;
import dao.AcademicDao; // Import the AcademicDao class
import model.StudentModel;
import model.AcademicModel; // Import the AcademicModel class
import service.AdminService;
import service.StudentDetails;
import service.UserService;

public class MainController {

    public static void main(String[] args) throws ClassNotFoundException {
        @SuppressWarnings("resource")
        Scanner sc = new Scanner(System.in);
        System.out.println("Student Information Management System");

        System.out.println("Select Role:");
        System.out.println("1) Login as User");
        System.out.println("2) Login as Admin");
        int roleChoice = sc.nextInt();
        sc.nextLine();

        if (roleChoice == 2) {
            AdminService adminservice = new AdminService();
            System.out.print("Admin Username: ");
            String adminUsername = sc.nextLine();
            System.out.print("Admin Password: ");
            String adminPassword = sc.nextLine();
            boolean isAuthenticated = adminservice.authenticateAdmin(adminUsername, adminPassword);

            if (!isAuthenticated) {
                System.out.println("Authentication failed. Exiting the program.");
                sc.close();
                return;
            }

            StudentDetails studentService = new StudentDetails();
            AcademicDao academicDao = new AcademicDao(); // Initialize AcademicDao

            while (true) {
                System.out.println("1) Add Student\n2) View Students\n3) Update Student by ID\n4) Filter Student by Course\n5) Search\n6) Exit");
                int choice = sc.nextInt();
                sc.nextLine(); // Consume the newline character

                switch (choice) {
                    case 1:
                        addStudent(sc, studentService, academicDao);
                        break;
                    case 2:
                        viewStudent(studentService, academicDao);
                        break;
                    case 3:
                        updateStudent(sc, studentService, academicDao);
                        break;
                    case 4:
                    	 System.out.print("Enter the Course to Search:");
                    	 System.out.print("the Courses availabe : CSE    IT    ECE    EEE    MECH    CIVIL");
                         String studentCourse = sc.nextLine();
                        viewStudent(studentService, academicDao, studentCourse);
                        break;
                    case 5:
                        System.out.print("Enter the Id to Search:");
                        int studentId = sc.nextInt();
                        sc.nextLine(); // Consume the newline character
                        viewStudentById(studentId,studentService, academicDao);
                        break;
                    case 6:
                        System.out.print("Thank You");
                        sc.close();
                        System.exit(0);
                    default:
                        System.out.println("Invalid choice. Try again.");
                }
            }
        }  if (roleChoice == 1) {
        	 StudentDetails studentService = new StudentDetails();
             AcademicDao academicDao = new AcademicDao(); // Initialize AcademicDao
            System.out.print("Enter Student ID: ");
            int studentId = sc.nextInt();
            sc.nextLine();

            UserService userService = new UserService();

            System.out.print("Username: ");
            String userName = sc.nextLine();

            System.out.print("Password: ");
            String userPassword = sc.nextLine();

            boolean isAuthenticated;
            try {
                isAuthenticated = userService.authenticateUser(userName, userPassword);
            } catch (ClassNotFoundException e) {
                isAuthenticated = false;
                e.printStackTrace();
            }

            if (!isAuthenticated) {
                System.out.println("Authentication failed. Exiting the program.");
                sc.close();
                return;
            } else {
                viewStudentById(studentId,studentService, academicDao);
                 // Display Academic details
            }
        }
    }


   
    private static void viewStudentById(int studentId, StudentDetails studentService, AcademicDao academicDao) {
        StudentModel student = studentService.getStudentById(studentId);
        AcademicModel academic = academicDao.getStudentById(studentId);

        if (student == null) {
            System.out.println("Invalid ID");
            return;
        }

        System.out.println("+----------------------------------------------");
        System.out.println("|               Student Information           |");
        System.out.println("+----------------------------------------------");
        printLabelValue("ID", student.getStudentId());
        printLabelValue("Name", student.getStudentName());
        printLabelValue("Age", student.getStudentAge());
        printLabelValue("Phone No", student.getStudentPhoneNo());
        printLabelValue("Date of Birth", student.getStudentDateOfBirth());
        printLabelValue("Email", student.getStudentEmail());
        printLabelValue("Address", student.getStudentAddress());
        printLabelValue("Blood Group", student.getStudentBGrp());
        System.out.println("+----------------------------------------------");

        if (academic != null) {
            System.out.println("+----------------------------------------------");
            System.out.println("|               Academic Information          |");
            System.out.println("+----------------------------------------------");
            printLabelValue("Class", academic.getStudentClass());
            printLabelValue("Course", academic.getStudentCourse());
            printLabelValue("Attendance", academic.getStudentAttendence());
            printLabelValue("Previous Year", academic.getStudentPYear());
            printLabelValue("Subsequent Year", academic.getStudentSYear());
            printLabelValue("CGPA", academic.getStudentCgpa());
            System.out.println("+----------------------------------------------");
        }
    }

    private static void printLabelValue(String label, Object value) {
        System.out.printf("| %-20s | %-20s |%n", label, value);
    }



    private static void addStudent(Scanner sc, StudentDetails studentService, AcademicDao academicDao) {
        System.out.print("Enter Student ID: ");
        int studentId = sc.nextInt();
        sc.nextLine(); // Consume the newline character

        System.out.print("Enter Student Name: ");
        String studentName = sc.nextLine();

        System.out.print("Enter Student Age: ");
        String studentAge = sc.nextLine();

        System.out.print("Enter Student Phone Number: ");
        String studentPhoneNo = sc.nextLine();

        System.out.print("Enter Student Date of Birth (DOB): ");
        String studentDateOfBirth = sc.nextLine();

        System.out.print("Enter Student Email: ");
        String studentEmail = sc.nextLine();

        System.out.print("Enter Student Address: ");
        String studentAddress = sc.nextLine();

        System.out.print("Enter Student Blood Group: ");
        String studentBGrp = sc.nextLine();

        StudentModel student = new StudentModel(studentId, studentName, studentAge, studentPhoneNo,
                studentDateOfBirth, studentEmail, studentAddress, studentBGrp);

        studentService.addStudent(student);

        System.out.print("Enter Student Class: ");
        String studentClass = sc.nextLine();

        System.out.print("Enter Student Course: ");
        String studentCourse = sc.nextLine();

        System.out.print("Enter Student Attendance: ");
        String studentAttendance = sc.nextLine();

        System.out.print("Enter Student Previous Year: ");
        String studentPYear = sc.nextLine();

        System.out.print("Enter Student Subsequent Year: ");
        String studentSYear = sc.nextLine();

        System.out.print("Enter Student CGPA: ");
        double studentCgpa = sc.nextDouble();
        sc.nextLine(); // Consume the newline character

        AcademicModel academic = new AcademicModel(studentId, studentClass, studentCourse, studentAttendance,
                studentPYear, studentSYear, studentCgpa);

        academicDao.addStudent(academic);

        System.out.println("Student added successfully.");
    }
    private static void viewStudent(StudentDetails studentService,AcademicDao academicDao, String course) {
    	
        ArrayList<AcademicModel> students = academicDao.getStudentsByCourse(course);

        if (students.isEmpty()) {
            System.out.println("No students found for the course: " + course);
            return;
        }

        for (AcademicModel student : students) {
            System.out.println("+----------------------------------------------");
            System.out.println("|               Student Information           |");
            System.out.println("+----------------------------------------------");
            printLabelValue("ID", student.getStudentId());
            printLabelValue("CGPA", student.getStudentCgpa());
            printLabelValue("Class", student.getStudentClass());
            printLabelValue("Passing Year", student.getStudentPYear());
            printLabelValue("Attendence", student.getStudentAttendence());
            printLabelValue("Course", student.getStudentCourse());
            printLabelValue("Starting Year", student.getStudentSYear());
            System.out.println("+----------------------------------------------");
        }
    }
    private static void viewStudent(StudentDetails studentService, AcademicDao academicDao) {
        ArrayList<StudentModel> students = studentService.getAllStudents();

        if (students.isEmpty()) {
            System.out.println("No students found.");
            return;
        }

        for (StudentModel student : students) {
            System.out.println("+----------------------------------------------");
            System.out.println("|               Student Information           |");
            System.out.println("+----------------------------------------------");
            printLabelValue("ID", student.getStudentId());
            printLabelValue("Name", student.getStudentName());
            printLabelValue("Age", student.getStudentAge());
            printLabelValue("Phone No", student.getStudentPhoneNo());
            printLabelValue("Date of Birth", student.getStudentDateOfBirth());
            printLabelValue("Email", student.getStudentEmail());
            printLabelValue("Address", student.getStudentAddress());
            printLabelValue("Blood Group", student.getStudentBGrp());
            System.out.println("+----------------------------------------------");

            AcademicModel academic = academicDao.getStudentById(student.getStudentId());
            if (academic != null) {
                printLabelValue("Class", academic.getStudentClass());
                printLabelValue("Course", academic.getStudentCourse());
                printLabelValue("Attendance", academic.getStudentAttendence());
                printLabelValue("Previous Year", academic.getStudentPYear());
                printLabelValue("Subsequent Year", academic.getStudentSYear());
                printLabelValue("CGPA", academic.getStudentCgpa());
                System.out.println("+----------------------------------------------");
            } else {
                System.out.println("Academic information not available for this student.");
            }
        }
    }

    private static void printLabelValue(String label, String value) {
        System.out.printf("| %-20s | %-20s |%n", label, value);
    }


    private static void updateStudent(Scanner sc, StudentDetails studentService, AcademicDao academicDao) {
        System.out.print("Enter Student ID to update: ");
        int studentId = sc.nextInt();
        sc.nextLine(); // Consume the newline character

        StudentModel existingStudent = studentService.getStudentById(studentId);
        AcademicModel existingAcademic = academicDao.getStudentById(studentId);

        if (existingStudent == null || existingAcademic == null) {
            System.out.println("Student with ID " + studentId + " not found.");
            return;
        }

        System.out.print("Enter new Student Name (Leave empty to keep current): ");
        String studentName = sc.nextLine();
        if (!studentName.isEmpty()) {
            existingStudent.setStudentName(studentName);
        }

        System.out.print("Enter new Student Age (Leave empty to keep current): ");
        String studentAge = sc.nextLine();
        if (!studentAge.isEmpty()) {
            existingStudent.setStudentAge(studentAge);
        }

        System.out.print("Enter new Student Phone Number (Leave empty to keep current): ");
        String studentPhoneNo = sc.nextLine();
        if (!studentPhoneNo.isEmpty()) {
            existingStudent.setStudentPhoneNo(studentPhoneNo);
        }

        System.out.print("Enter new Student Date of Birth (DOB) (Leave empty to keep current): ");
        String studentDateOfBirth = sc.nextLine();
        if (!studentDateOfBirth.isEmpty()) {
            existingStudent.setStudentDateOfBirth(studentDateOfBirth);
        }

        System.out.print("Enter new Student Email (Leave empty to keep current): ");
        String studentEmail = sc.nextLine();
        if (!studentEmail.isEmpty()) {
            existingStudent.setStudentEmail(studentEmail);
        }

        System.out.print("Enter new Student Address (Leave empty to keep current): ");
        String studentAddress = sc.nextLine();
        if (!studentAddress.isEmpty()) {
            existingStudent.setStudentAddress(studentAddress);
        }

        System.out.print("Enter new Student Blood Group (Leave empty to keep current): ");
        String studentBGrp = sc.nextLine();
        if (!studentBGrp.isEmpty()) {
            existingStudent.setStudentBGrp(studentBGrp);
        }

        studentService.updateStudent(existingStudent);

        System.out.print("Enter new Student Class (Leave empty to keep current): ");
        String studentClass = sc.nextLine();
        if (!studentClass.isEmpty()) {
            existingAcademic.setStudentClass(studentClass);
        }

        System.out.print("Enter new Student Course (Leave empty to keep current): ");
        String studentCourse = sc.nextLine();
        if (!studentCourse.isEmpty()) {
            existingAcademic.setStudentCourse(studentCourse);
        }

        System.out.print("Enter new Student Attendance (Leave empty to keep current): ");
        String studentAttendance = sc.nextLine();
        if (!studentAttendance.isEmpty()) {
            existingAcademic.setStudentAttendence(studentAttendance);
        }

        System.out.print("Enter new Student Previous Year (Leave empty to keep current): ");
        String studentPYear = sc.nextLine();
        if (!studentPYear.isEmpty()) {
            existingAcademic.setStudentPYear(studentPYear);
        }

        System.out.print("Enter new Student Subsequent Year (Leave empty to keep current): ");
        String studentSYear = sc.nextLine();
        if (!studentSYear.isEmpty()) {
            existingAcademic.setStudentSYear(studentSYear);
        }

        System.out.print("Enter new Student CGPA (Leave empty to keep current): ");
        String cgpaStr = sc.nextLine();
        if (!cgpaStr.isEmpty()) {
            double studentCgpa = Double.parseDouble(cgpaStr);
            existingAcademic.setStudentCgpa(studentCgpa);
        }

        academicDao.updateStudent(existingAcademic);

        System.out.println("Student with ID " + studentId + " updated successfully.");
    }


   
}
