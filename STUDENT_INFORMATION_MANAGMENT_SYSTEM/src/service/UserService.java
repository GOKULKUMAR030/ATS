package service;

import dao.*;

import model.UserModel;

public class UserService {
	 private UserDao userDao = new UserDao();

	    
	    public boolean authenticateUser(String username, String password) throws ClassNotFoundException {
	        UserModel user = userDao.getUserByUsername(username);
	        if (user != null && user.getUserPassword().equals(password)) {
	            return true; 
	        }
	        return false; 
	    }
}
