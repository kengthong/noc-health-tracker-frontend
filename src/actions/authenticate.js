// import request from 'superagent';

//refactoring based on tutorial.

//Action types define

export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGOUT_SUCCESSFUL = 'LOGOUT_SUCCESSFUL';
export const USER_LOADED = 'USER_LOADED';
export const USER_LOADING = 'USER_LOADING';
export const NEW_G_USER = 'NEW_G_USER';

//Action creators defined
export const checkUsernameUniqueness = username => {
  // return request
  //   .post(process.env.API_URL + 'users/check-username/')
  //   .send({ username })
  //   .set('Content-Type', 'application/json');
};

export const googleSignIn = googleUserProfile => {
  // return dispatch => {
  //   dispatch({ type: USER_LOADING });
  //   return request
  //     .post(process.env.API_URL + 'users/google-sign-in/')
  //     .send({ googleUserProfile })
  //     .set('Accept', 'application/json')
  //     .end((err, res) => {
  //       if (!err) {
  //         if (res.body.newUser) {
  //           dispatch({ type: NEW_G_USER });
  //         } else {
  //           let user = {
  //             username: res.body.username,
  //             email: res.body.email,
  //             profile: res.body.profile,
  //           };
  //           let token = res.body.token;
  //           dispatch({ type: LOGIN_SUCCESSFUL, data: { user, token } });
  //         }
  //       } else {
  //         if (res.statusCode == 403 || res.statusCode === 401) {
  //           dispatch({ type: AUTHENTICATION_ERROR, data: res.body });
  //           return res.body;
  //         } else {
  //           dispatch({ type: LOGIN_FAILED, data: res.body });
  //         }
  //       }
  //     });
  // };
};

export const loadUser = () => {
  // return dispatch => {
  //   dispatch({ type: USER_LOADING });
  //   const token = localStorage.getItem('token');

  //   return request
  //     .get(process.env.API_URL + 'users/current/')
  //     .set('Authorization', `JWT ${token}`)
  //     .set('Accept', 'application/json')
  //     .end((err, res) => {
  //       if (!err) {
  //         dispatch({ type: USER_LOADED, user: res.body });
  //       } else {
  //         if (res.statusCode === 403 || res.statusCode === 401) {
  //           dispatch({ type: AUTHENTICATION_ERROR, data: res.body });
  //           return res.body;
  //         } else {
  //           dispatch({ type: AUTHENTICATION_ERROR, data: res.body });
  //           throw res.body;
  //         }
  //       }
  //     });
  // };
};

export const login = (username, password) => {
  // return dispatch => {
  //   return request
  //     .post(process.env.API_URL + 'token-auth/')
  //     .send({ username, password })
  //     .set('Content-Type', 'application/json')
  //     .end((err, res) => {
  //       if (!err) {
  //         dispatch({ type: LOGIN_SUCCESSFUL, data: res.body });
  //       } else {
  //         if (res.statusCode === 403 || res.statusCode === 401) {
  //           dispatch({ type: AUTHENTICATION_ERROR, data: res.body });
  //         } else {
  //           dispatch({ type: LOGIN_FAILED, data: res.body });
  //         }
  //       }
  //     });
  // };
};

export const setUser = token => {
  // return dispatch => {
  //   dispatch({ type: LOGIN_SUCCESSFUL, data: { token } });
  // };
};

export const signUp = data => {
  // return dispatch => {
  //   return request
  //     .post(process.env.API_URL + 'users/all/')
  //     .send(data)
  //     .set('Content-Type', 'application/json')
  //     .end((err, res) => {
  //       if (!err) {
  //         dispatch({ type: LOGIN_SUCCESSFUL, data: res.body });
  //       } else {
  //         if (res.statusCode === 403 || res.statusCode === 401) {
  //           dispatch({ type: AUTHENTICATION_ERROR, data: res.body });
  //         } else {
  //           dispatch({ type: LOGIN_FAILED, data: res.body });
  //         }
  //       }
  //     });
  // };
};

export const logout = (auth2 = null) => {
  // return dispatch => {
  //   dispatch({ type: LOGOUT_SUCCESSFUL, data: { auth2: auth2 } });
  // };
};
