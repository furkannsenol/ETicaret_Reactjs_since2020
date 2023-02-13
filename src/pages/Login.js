import "../css/Pages.css";
import { AiFillLock } from "react-icons/ai";
import axios from "axios";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent.js";
import NavbarComponent from "../components/NavbarComponent.js";
import FooterComponent from "../components/FooterComponent.js";

function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [model, setModel] = useState([]);
  const [getId, setGetId] = useState("");
  const [getRole, setGetRole] = useState("");
  const [getName, setGetName] = useState("");
  const [getLastname, setGetLastname] = useState("");
  const [getEmail, setGetEmail] = useState("");
  const [count, setCount] = useState(0);

  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const history = useHistory();

  const obj = {
    mail: mail,
    password: password,
  };

  const UserLogin = (e) => {
    e.preventDefault();
    model.push(obj);
    var API_PATH = "http://localhost:81/e-commerce-react/login.php";
    axios
      .post(API_PATH, obj)
      .then((response) => {
        const modelList = response.data[0];
        console.log("modellist= ", modelList);
        const selectingName = modelList.uye_Ad;
        const selectingLastName = modelList.uye_Soyad;
        const selectingId = modelList.uye_Id;
        const selectingRole = modelList.rol_Id;
        const selectingMail = modelList.uye_Email;
        setGetName(selectingName);
        setGetId(selectingId);
        setGetRole(selectingRole);
        setGetLastname(selectingLastName);
        setGetEmail(selectingMail);
        LocalStorageInsert();
      })
      .catch((error) => {
        console.log(error);
        alert("Lütfen bilgilerinizi kontrol edin.");
      });
  };

  const LocalStorageInsert = () => {
    window.localStorage.setItem("Name", getName);
    window.localStorage.setItem("Lastname", getLastname);
    window.localStorage.setItem("Id", getId);
    window.localStorage.setItem("RoleId", getRole);
    window.localStorage.setItem("Email", getEmail);
    setCount(count + 1);
    if (count > 0) {
      history.push("/Homepage");
    }
  };

  return (
    <div>
      <HeaderComponent />
      <NavbarComponent />
      <div class="container uyecerceve">
        <div class="member-title">ÜYE GİRİŞİ</div>
        <div class="centerForm">
          <form
            onSubmit={UserLogin}
            class="form-horizontal col-sm-offset-2 col-sm-7"
          >
            <div class="form-group">
              <label class="control-label" for="email">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                name="mail"
                id="mail"
                placeholder=""
                required
                onChange={handleMail}
              ></input>
            </div>

            <div class="form-group">
              <label class="control-label marginTop-10" for="pwd">
                Şifre
              </label>
              <input
                type="password"
                class="form-control"
                name="password"
                id="password"
                placeholder=""
                required
                onChange={handlePassword}
              ></input>
            </div>

            <div class="form-group sideBySide">
              <div class="col-sm-offset-2 col-sm-4">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" /> Beni hatırla
                  </label>
                </div>
              </div>

              <div
                class="col-sm-offset-2 col-sm-4"
                style={{ textAlign: "center" }}
              >
                <label class="sifre-unut">
                  <a href="/Register">Hala hesabınız yok mu ?</a>
                </label>
              </div>
              <div
                class="col-sm-offset-2 col-sm-4"
                style={{ textAlign: "right" }}
              >
                <label class="sifre-unut">
                  <a href="/ForgotPassword">Şifremi Unuttum</a>
                </label>
              </div>
            </div>

            <div class="btnuye-div">
              <button
                type="submit"
                name="submit"
                class="btn btn-default btnuye btn-block"
              >
                <AiFillLock style={{ marginRight: 10 }} />
                GİRİŞ YAP
              </button>
            </div>
          </form>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Login;
