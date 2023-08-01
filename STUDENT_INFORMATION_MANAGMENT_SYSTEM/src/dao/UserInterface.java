package dao;

import model.UserModel;

public interface UserInterface {
	UserModel getUserByUsername(String username) throws ClassNotFoundException;

}
