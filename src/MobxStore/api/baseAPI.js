import axios from 'axios';
const TIME_OUT = 1000 * 5; // 6s

/** ------------------------------------------*
 * @method     : get
 * @param      : url: string
 * @param      : header: object
 * @return     : promise
 * @author     : Jack 2018-11-09 10:19:19
 * @description: description
 * ------------------------------------------- */
export const get = (url = '', header = {}, paramHeader={}) => {
  const config = { headers: header, timeout: TIME_OUT, params: paramHeader };
  return axios
    .get(url, config)
    .then((response) => response)
    .catch((error) => error.response);
};


/** ------------------------------------------*
 * @method     : post
 * @param      : url
 * @param      : data
 * @param      : header
 * @return     : void
 * @author     : Jack 2019-03-11 13:04:51
 * @description: description
 * ------------------------------------------- */
export const post = (url = '', data = {}, header = {}) => {
  const config = { headers: header, timeout: TIME_OUT };
  return axios
    .post(url, data, config)
    .then((response) => response)
    .catch((error) => error.response);
};

/** ------------------------------------------*
 * @method     : put
 * @param      : url
 * @param      : data
 * @param      : header
 * @return     : void
 * @author     : Jack 2019-03-13 17:09:18
 * @description: description
 * ------------------------------------------- */
export const put = (url = '', data = {}, header = {}) => {
  const config = { headers: header, timeout: TIME_OUT };
  return axios
    .put(url, data, config)
    .then((response) => response)
    .catch((error) => error.response);
};

/** ------------------------------------------*
 * @method     : delete
 * @param      : url: string
 * @param      : header: object
 * @return     : promise
 * @author     : Jack 2018-11-09 10:19:19
 * @description: description
 * ------------------------------------------- */
export const del = (url = '', header = {}, paramHeader={}) => {
  const config = { headers: header, timeout: TIME_OUT, params: paramHeader  };
  return axios
    .delete(url, config)
    .then((response) => response)
    .catch((error) => error.response);
};

