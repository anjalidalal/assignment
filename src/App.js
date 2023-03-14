import React, { useEffect, useState } from "react";
import Authentication from "./component/Authentication";
import { auth } from "./component/firebase";
import Home from "./component/home/Home";
import { useDispatch } from "react-redux";
import { getUser } from "./component/Redux/Action";

const App = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
      console.log(user);
      dispatch(
        getUser({
          displayName: user.displayName,
          email: user.email,
          id: user.uid,
          photo: user.photoURL,
          phoneNumber: user.phoneNumber,
        })
      );
    });
  }, []);
  return (
    <>
      {userName ? <Home /> : <Authentication />}
      {/* <Authentication /> */}
    </>
  );
};

export default App;
