import jwt from 'jwt-simple';
import users from './users-db';

const SECRET = 'jquery_is_amazing';

export const createUser = ({ name, login, password }) => {
  return new Promise((resolve, reject) => {
    const user = users.find(user => user.login === login);

    setTimeout(() => {
      if (user) reject('User already exists!');

      const newUser = {
        name,
        login,
        password,
        jwt_token: jwt.encode(user.password, SECRET),
      };

      users.push(newUser);

      resolve({
        user: {
          name: newUser.name,
          login: newUser.login,
        },
        token: newUser.jwt_token,
      });
    }, 300);
  });
};

export const signIn = ({ login, password }) => {
  return new Promise((resolve, reject) => {
    const user = users.find(user => user.login === login);

    setTimeout(() => {
      if (!user) {
        reject('User does not exist!');
        return;
      }

      if (user.password !== password) {
        reject('Invalid password!');
        return;
      }

      user.jwt_token = jwt.encode(user.password, SECRET);

      resolve({
        user: {
          name: user.name,
          login: user.login,
        },
        token: user.jwt_token,
      });
    }, 300);
  });
};

export const signOut = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 300);
  });
};
