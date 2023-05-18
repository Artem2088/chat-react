const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status} ${res.statusText}`);
};

export const getNumber = (id, token) => {
  return fetch(
    `https://api.green-api.com/waInstance${id}/GetSettings/${token}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(checkResponse);
};

export const getUserInfo = (data, userId, userToken) => {
  return fetch(
    `https://api.green-api.com/waInstance${userId}/getContactInfo/${userToken}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        chatId: `${data}`,
      }),
    }
  ).then(checkResponse);
};

export const createUser = (userId, userToken, value) => {
  return fetch(
    `https://api.green-api.com/waInstance${userId}/getContactInfo/${userToken}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        chatId: `${value}@c.us`,
      }),
    }
  ).then(checkResponse);
};

export const getHistoriMessage = (userId, userToken, value) => {
  return fetch(
    `https://api.green-api.com/waInstance${userId}/GetChatHistory/${userToken}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        chatId: `${value}@c.us`,
        count: 10,
      }),
    }
  ).then(checkResponse);
};

export const createMsg = (userId, userToken, value, idForMsg) => {
  return fetch(
    `https://api.green-api.com/waInstance${userId}/SendMessage/${userToken}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        chatId: `${value}@c.us`,
        message: `${idForMsg}`,
      }),
    }
  ).then(checkResponse);
};

export const receiveNotification = (userId, userToken) => {
  return fetch(
    `https://api.green-api.com/waInstance${userId}/ReceiveNotification/${userToken}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(checkResponse);
};

export const deleteMesssage = (userId, userToken, countId) => {
  return fetch(
    `https://api.green-api.com/waInstance${userId}/DeleteNotification/${userToken}/${countId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(checkResponse);
};

export const logOut = (userId, userToken) => {
  return fetch(
    `https://api.green-api.com/waInstance${userId}/Logout/${userToken}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(checkResponse);
};
