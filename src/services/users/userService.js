// import { httpClient } from "../api";

// const END_POINT = "/users";

export const userService = {
  signIn(userCredentials) {
    const promise = new Promise((resolve, reject) => {
      if (
        userCredentials.username == "root" &&
        userCredentials.password == 1234
      ) {
        resolve(true);
      } else {
        reject(false);
      }
    });

    return promise;
  },
};
