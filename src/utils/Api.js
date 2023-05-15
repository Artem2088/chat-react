const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status} ${res.statusText}`);
};

// export const login = (id, token) => {
//   return fetch(
//     `https://api.green-api.com/waInstance${id}/getStateInstance/${token}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   ).then(checkResponse);
// };

// export const logOut = (userId, userToken) => {
//   return fetch(
//     `https://api.green-api.com/waInstance${userId}/Logout/${userToken}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   ).then(checkResponse);
// };

export const getUserInfo = (id, token) => {
  return fetch(
    `https://api.green-api.com/waInstance${id}/getContactInfo/${token}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        chatId: "79315968591@c.us",
      }),
    }
  ).then(checkResponse);
};

export const getAllContacts = (userId, userToken) => {
  return fetch(
    `https://api.green-api.com/waInstance${userId}/GetContacts/${userToken}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(checkResponse);
};
