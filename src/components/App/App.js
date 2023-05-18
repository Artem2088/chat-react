import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Main from "../Main/Main";
import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import * as Api from "../../utils/Api";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Loader from "../Loader/Loader";

const App = () => {
  const navigate = useNavigate();
  const [auth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState();
  const [userToken, setUserToken] = useState();
  const [userAvatar, setAvatar] = useState();
  const [newUser, setNewUser] = useState([]);
  const [idForMsg, setIdForMsg] = useState("");
  const [historyMsg, setHistoryMsg] = useState([]);
  const [receive, setResive] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (historyMsg.length == 0) {
      return;
    } else {
      receiveNotific();
      getHistoryMsg();
    }
  }, [receive, historyMsg]);

  const getNumber = (id, token) => {
    setLoading(true);
    Api.getNumber(id, token)
      .then((res) => {
        let data = res.wid;
        getInfo(data, id, token);
        setUserId(id);
        setUserToken(token);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getInfo = (userId, userToken, data) => {
    setLoading(true);
    Api.getUserInfo(userId, userToken, data)
      .then((res) => {
        navigate("/");
        setAvatar(localStorage.setItem("avatar", res.avatar));
        setIsAuth(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const createNewUser = (value) => {
    setLoading(true);
    Api.createUser(userId, userToken, value)
      .then((res) => {
        setIdForMsg(value);
        setNewUser([...newUser, res]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const createMessage = (value) => {
    setLoading(true);
    Api.createMsg(userId, userToken, idForMsg, value)
      .then((res) => {
        setHistoryMsg([...historyMsg, value], res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getHistoryMsg = () => {
    setLoading(true);
    Api.getHistoriMessage(userId, userToken, idForMsg)
      .then((res) => {
        setHistoryMsg(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const receiveNotific = () => {
    setLoading(true);
    Api.receiveNotification(userId, userToken)
      .then((res) => {
        setResive(true);
        if (!res.body.messageData.textMessageData) {
          setHistoryMsg(historyMsg);
        }
        setHistoryMsg([
          ...historyMsg,
          res.body.messageData.textMessageData.textMessage,
        ]);
        deleteReadMessage(res.receiptId);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteReadMessage = (coutnId) => {
    Api.deleteMesssage(userId, userToken, coutnId)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogOut = () => {
    Api.logOut(userId, userToken)
      .then(() => {
        navigate("/login");
        setIsAuth(false);
        localStorage.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='page'>
      <div className='page__container'>
        {isLoading ? (
          <Loader />
        ) : (
          <Routes>
            <Route
              exact
              path='/login'
              element={
                <Login
                  onLogin={getNumber}
                  setUserId={setUserId}
                  setUserToken={setUserToken}
                />
              }
            />
            <Route
              path='/'
              element={
                <>
                  <ProtectedRoute
                    auth={auth}
                    component={Header}
                    onLogOut={handleLogOut}
                    onCreateUser={createNewUser}
                    avatar={localStorage.getItem("avatar")}
                  />
                  <ProtectedRoute
                    auth={auth}
                    component={Main}
                    newUser={newUser}
                    onGetHistoryMsg={getHistoryMsg}
                    historyMsg={historyMsg}
                    onCreateMessage={createMessage}
                  />
                </>
              }
            />
            <Route path='*' element={<Navigate to={auth ? "/login" : "/"} />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default App;
