import axios from "axios";
import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent.js";
import NavbarComponent from "../components/NavbarComponent.js";
import FooterComponent from "../components/FooterComponent.js";

function Contact() {
  const [mail, setMail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [model, setModel] = useState([]);

  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleText = (e) => {
    setText(e.target.value);
  };

  const obj = {
    mail: mail,
    subject: subject,
    text: text,
  };

  const SendMessage = (e) => {
    e.preventDefault();
    if (mail == "" || subject == "" || text == "") {
      alert("Lütfen boş alan bırakmayın.");
    } else {
      model.push(obj);
      var API_PATH = "http://localhost:81/e-commerce-react/contact.php";
      axios
        .post(API_PATH, obj)
        .then((result) => {
          console.log(result);
          console.log("basarili= ", model);
          alert("mesajınız gönderildi.");
        })
        .catch((error) => {
          console.log(error);
          alert("hata.");
        });
    }
  };
  return (
    <div>
      <HeaderComponent />
      <NavbarComponent />
      <div class="container uyecerceve">
        <div class="row">
          <div class="col-sm-6">
            <h2 style={{ textAlign: "center" }}>Bize Ulaşın</h2>
            <form
              onSubmit={SendMessage}
              class="form-horizontal col-sm-offset-2 "
              method="POST"
            >
              <div class="form-group">
                <label class="control-label " for="text">
                  Email Adresiniz
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="mail"
                  name="mail"
                  placeholder=""
                  required
                  onChange={handleMail}
                />
              </div>

              <div class="form-group">
                <label class="control-label" for="text">
                  Konu
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="konu"
                  name="konu"
                  placeholder=""
                  required
                  onChange={handleSubject}
                />
              </div>

              <div class="form-group">
                <label class="control-label" for="text">
                  İletiniz
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="ileti"
                  name="ileti"
                  placeholder=""
                  rows="4"
                  cols="10"
                  required
                  onChange={handleText}
                ></textarea>
              </div>

              <div class="form-group marginTop-10">
                <button
                  class="btn btn-default btnuye"
                  type="submit"
                  name="submit"
                >
                  GÖNDER
                </button>
              </div>
            </form>
          </div>

          <div class="col-sm-6" style={{ marginTop: 30 }}>
            <iframe
              src="https://maps.google.com/maps?q=trakya%20m%C3%BChendislik&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="540"
              height="450"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

export default Contact;
