import "../css/Pages.css";
import { AiFillLock } from "react-icons/ai";
import axios from "axios";
import React, { useState } from "react";

function ForgotPassword() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [model, setModel] = useState([]);

  const ResetState = () => {
    setMail("");
    setPassword("");
    setPasswordAgain("");
    setModel([]);
  };

  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordAgain = (e) => {
    setPasswordAgain(e.target.value);
  };

  const obj = {
    mail: mail,
    password: password,
    passwordAgain: passwordAgain,
  };

  const ResetPassword = (e) => {
    e.preventDefault();
    if (mail == "" || password == "" || passwordAgain == "") {
      alert("Lütfen boş alan bırakmayın.");
    } else if (password != passwordAgain) {
      alert("Şifreleriniz uyuşmuyor.");
    } else {
      model.push(obj);
      var API_PATH = "http://localhost:81/e-commerce-react/resetPassword.php";
      axios
        .post(API_PATH, obj)
        .then((result) => {
          console.log(result);
          console.log("basarili= ", model);
          ResetState();
        })
        .catch((error) => {
          console.log(error);
          alert("hata.");
        });
    }
  };
  return (
    <div class="container uyecerceve">
      <div class="member-title">ŞİFREMİ UNUTTUM</div>
      <div class="centerForm">
        <form
          onSubmit={ResetPassword}
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
            <label class="control-label marginTop-10" for="text">
              Yeni Şifre
            </label>
            <input
              type="password"
              class="form-control"
              id="ilce"
              name="password"
              placeholder=""
              required
              onChange={handlePassword}
            />
            <div class="form-group">
              <label class="control-label marginTop-10" for="text">
                Şifre Tekrar
              </label>
              <input
                type="password"
                class="form-control"
                id="ilce"
                name="passwordAgain"
                placeholder=""
                required
                onChange={handlePasswordAgain}
              />
            </div>
          </div>

          <div class="btnuye-div">
            <button
              type="submit"
              name="submit"
              class="btn btn-default btnuye btn-block"
            >
              <AiFillLock style={{ marginRight: 10 }} />
              ŞİFREYİ KAYDET
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
