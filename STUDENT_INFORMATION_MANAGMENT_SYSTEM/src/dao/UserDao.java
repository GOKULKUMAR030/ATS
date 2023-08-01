package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import model.UserModel;
import utility.ConnectionManager;

public class UserDao  implements UserInterface {
	
    public UserModel getUserByUsername(String username) throws ClassNotFoundException {
        Connection connection = null;
        UserModel user = null;

        try {
            connection = ConnectionManager.getConnection();
            String query = "SELECT * FROM users WHERE userName = ?";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setString(1, username);

            ResultSet resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                int userId = resultSet.getInt("userId");
                String userName = resultSet.getString("userName");
                String userPassword = resultSet.getString("userPassword");
                user = new UserModel(userId, userName, userPassword);
            }
            resultSet.close();
            preparedStatement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return user;
    }

	
}
