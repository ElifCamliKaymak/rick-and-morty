/**
* fetch için kullanılan function
* @param {string} url json-server url
* @param {string} method GET | POST | DELETE | PUT
* @param {object} body bir object olmalı
* @returns
*/

export function getData(url, method = "GET", body) {
    return fetch(url, {
      method,
      headers: { "content-type": "application/json" },
      ...(body ? { body: JSON.stringify(body) } : {}),  })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response;
      });
  }