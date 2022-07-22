import axios from 'axios';

export function url(path) {
  return `${process.env.REACT_APP_API_URL}/api/v0${path}`;
}

export function AXIOS(option) {
  return axios({
    ...option,
  });
}
