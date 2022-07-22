import * as API from './apiType';

export const UserService = {
  getUser: async (id, pw) => {
    const method = 'POST';
    const url = API.url(`/users/login/`);
    const body = {
      username: id,
      password: pw,
    };

    let response;
    try {
      response = await API.AXIOS({
        method,
        data: body,
        url,
      });
    } catch (error) {
      console.log(error);
    }

    return response.data;
  },
  createUser: async (user) => {
    const method = 'POST';
    const url = API.url(`/users`);
    const body = user;

    let response;
    try {
      response = await API.AXIOS({
        method,
        data: body,
        url,
      });
    } catch (error) {
      console.log(error);
    }

    return response.data;
  },
  updateUser: async (user) => {
    const method = 'PUT';
    const url = API.url(`/users`);
    const body = user;

    let response;
    try {
      response = await API.AXIOS({
        method,
        data: body,
        url,
      });
    } catch (error) {
      console.log(error);
    }

    return response.data;
  },
  deleteUser: async (user_id) => {
    const method = 'DELETE';
    const url = API.url(`/users/${user_id}`);

    let response;
    try {
      response = await API.AXIOS({
        method,
        url,
      });
    } catch (error) {
      console.log(error);
    }
    return response.data;
  },
};
