import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Main from "../Main/Main";
import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import * as Api from "../../utils/Api";
import { context } from "../../context/context";

const App = () => {
  const navigate = useNavigate();
  const [auth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState();
  const [userToken, setUserToken] = useState("");
  const [userAvatar, setAvatar] = useState();
  const [allContactsId, setAllContactsId] = useState([]);
  const [flagId, setIsFlagId] = useState(false);

  useEffect(() => {
    setUserId(localStorage.getItem("id"));
    setUserToken(localStorage.getItem("token"));
  }, []);

  const getInfo = (id, token) => {
    Api.getUserInfo(id, token)
      .then((res) => {
        navigate("/");
        setAvatar(localStorage.setItem("avatar", res.avatar));
        setIsAuth(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getContactsAll = () => {
    Api.getAllContacts(userId, userToken)
      .then((res) => {
        setAllContactsId(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleLogOut = () => {
  //   Api.logOut(userId, userToken)
  //     .then(() => {
  //       navigate("/login");
  //       setIsAuth(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <context.Provider value={""}>
      <div className='page'>
        <div className='page__container'>
          <Routes>
            <Route
              path='/login'
              element={
                <Login
                  onLogin={getInfo}
                  setUserId={setUserId}
                  setUserToken={setUserToken}
                />
              }
            />
            <Route
              exact
              path='/'
              element={
                <>
                  <Header
                    // onLogOut={handleLogOut}
                    avatar={localStorage.getItem("avatar")}
                    onGetAllContacts={getContactsAll}
                  />
                  <Main onGetAllContacts={allContactsId} />
                </>
              }
            />
            <Route path='*' element={<Navigate to={auth ? "/login" : "/"} />} />
          </Routes>
        </div>
      </div>
    </context.Provider>
  );
};

export default App;
