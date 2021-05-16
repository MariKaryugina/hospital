import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import React, { useState } from "react";
import Modal from "./components/modal/modal";
import CommonInput from "./components/commonInput";
import NameForm from "./components/form/form";

const App = () => {
  const [modalActive, setModalActive] = useState(false); 
  console.log("render");
  return (
    <div>
      <CommonInput fieldName='Name'/>
      <CommonInput fieldName='SecondName'/>
      <CommonInput fieldName='Patronymic'/>
      {/* {(visible && ( */}
        {/* <Modal active={visible} setActive={setVisible}/> */}
      {/* )) || <></>} */}
      <button onClick={() => setModalActive(!modalActive)}>Запись на прием</button>
      <Modal active={modalActive} setActive={setModalActive}>
        <NameForm/>

      </Modal>
    </div>
  );
  // return (
  // <div>
  //   <img src = "https://lh3.googleusercontent.com/proxy/xI5gL5nxXyhzQj7zT9pcF1yfuKRmVh2YMoNdrt6lHe8fuMTO8reIZle-2Mq8ivGVpztscZRJoXNthusW048bWgK8YT6tkNne_BbGkGbuvQ" alt/>
  // </div>
  // )
};

export default App;
