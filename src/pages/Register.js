import "../css/Pages.css";
import { AiFillSave } from "react-icons/ai";
import axios from "axios";
import React, { useState } from "react";

function Register() {
  state={
    degisken:"deneme"
  }
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [model, setModel] = useState([]);

  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordAgain = (e) => {
    setPasswordAgain(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
  };

  const obj = {
    name: name,
    lastname: lastname,
    mail: mail,
    password: password,
    passwordAgain: passwordAgain,
  };

  const UserRegister = (e) => {
    e.preventDefault();
    console.log(model);
    if (password != passwordAgain) {
      alert("Şifreleriniz uyuşmuyor.");
    } else {
      model.push(obj);
      var API_PATH = "http://localhost:81/e-commerce-react/register.php";
      axios
        .post(API_PATH, obj)
        .then((result) => {
          console.log(result);
          console.log("basarili= ", model);
          alert("Kaydınız tamamlandı.");
        })
        .catch((error) => {
          console.log(error);
          alert("Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
        });
    }
  };

  return (
    <div class="container uyecerceve">
      <div class="member-title">ÜYE KAYIT</div>
      <div class="centerForm">
        <form
          onSubmit={UserRegister}
          class="form-horizontal col-sm-offset-2 col-sm-7"
        >
          <div class="form-group">
            <label class="control-label" for="email">
              Email
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
            <label class="control-label marginTop-10" for="pwd">
              Şifre
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              placeholder=""
              required
              onChange={handlePassword}
            />
          </div>
          <div class="form-group">
            <label class="control-label marginTop-10" for="pwd">
              Şifre Tekrar
            </label>
            <input
              type="password"
              class="form-control"
              id="passwordAgain"
              name="passwordAgain"
              placeholder=""
              required
              onChange={handlePasswordAgain}
            />
          </div>
          <div class="form-group">
            <label class="control-label marginTop-10" for="text">
              Ad
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder=""
              required
              onChange={handleName}
            />
          </div>
          <div class="form-group">
            <label class="control-label marginTop-10" for="text">
              Soyad
            </label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              name="lastname"
              placeholder=""
              required
              onChange={handleLastname}
            />
          </div>
          {/* <div class="form-group">
            <label class="control-label col-sm-4 marginTop-10" for="tel">
              Telefon Numarası
            </label>
            <input
              type="number"
              class="form-control"
              id="tel"
              name="tel"
              placeholder=""
              required
            />
          </div> */}

          {/* <div class="form-group">
            <label
              class="control-label col-sm-2 marginTop-10"
              for="ulke"
              id="ulke"
            >
              Ülke
            </label>
            <select class="form-control" id="ulke" name="ulke">
              <option value="Türkiye" selected="selected">
                Türkiye
              </option>
              <option value="ABD Virgin Adaları">ABD Virgin Adaları</option>
              <option value="Almanya">Almanya</option>
              <option value="Amerika Birleşik Devletleri">
                Amerika Birleşik Devletleri
              </option>
              <option value="Andorra">Andorra</option>
              <option value="Antigua ve Barbuda">Antigua ve Barbuda</option>
              <option value="Arjantin">Arjantin</option>
              <option value="Arnavutluk">Arnavutluk</option>
              <option value="Aruba">Aruba</option>
              <option value="Avustralya">Avustralya</option>
              <option value="Avusturya">Avusturya</option>
              <option value="Azerbaycan">Azerbaycan</option>
              <option value="Bahama">Bahama</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahreyn">Bahreyn</option>
              <option value="Bangladeş">Bangladeş</option>
              <option value="Barbados">Barbados</option>
              <option value="Belçika">Belçika</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Beyaz Rusya">Beyaz Rusya</option>
              <option value="Birleşik Arap Emirlikleri">
                Birleşik Arap Emirlikleri
              </option>
              <option value="Bolivya">Bolivya</option>
              <option value="Bosna Hersek">Bosna Hersek</option>
              <option value="Brezilya">Brezilya</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaristan">Bulgaristan</option>
              <option value="Burma">Burma</option>
              <option value="Cebelitarık">Cebelitarık</option>
              <option value="Çek Cumhuriyeti">Çek Cumhuriyeti</option>
              <option value="Çin">Çin</option>
              <option value="Danimarka">Danimarka</option>
              <option value="Dominik Cumhuriyeti">Dominik Cumhuriyeti</option>
              <option value="Ekvator">Ekvator</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Endonezya">Endonezya</option>
              <option value="Eritre">Eritre</option>
              <option value="Ermenistan">Ermenistan</option>
              <option value="Estonya">Estonya</option>
              <option value="Fas">Fas</option>
              <option value="Fiji">Fiji</option>
              <option value="Filipinler">Filipinler</option>
              <option value="Finlandiya">Finlandiya</option>
              <option value="Fransa">Fransa</option>
              <option value="Fransız Polinezyası">Fransız Polinezyası</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadalup">Guadalup</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Güney Afrika">Güney Afrika</option>
              <option value="Gürcistan">Gürcistan</option>
              <option value="Hırvatistan">Hırvatistan</option>
              <option value="Hindistan">Hindistan</option>
              <option value="Hollanda">Hollanda</option>
              <option value="Hollanda Antilleri">Hollanda Antilleri</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="İngiliz Virginia Adaları">
                İngiliz Virginia Adaları
              </option>
              <option value="İngiltere">İngiltere</option>
              <option value="İrlanda">İrlanda</option>
              <option value="İspanya">İspanya</option>
              <option value="İsrail">İsrail</option>
              <option value="İsveç">İsveç</option>
              <option value="İsviçre">İsviçre</option>
              <option value="İtalya">İtalya</option>
              <option value="İzlanda">İzlanda</option>
              <option value="Jamaika">Jamaika</option>
              <option value="Japonya">Japonya</option>
              <option value="Kamboçya">Kamboçya</option>
              <option value="Kanada">Kanada</option>
              <option value="Katar">Katar</option>
              <option value="Kayman Adaları">Kayman Adaları</option>
              <option value="Kıbrıs">Kıbrıs</option>
              <option value="Kolombiya">Kolombiya</option>
              <option value="Kore">Kore</option>
              <option value="Kosta Rika">Kosta Rika</option>
              <option value="Kuveyt">Kuveyt</option>
              <option value="Küba">Küba</option>
              <option value="Letonya">Letonya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Litvanya">Litvanya</option>
              <option value="Lübnan">Lübnan</option>
              <option value="Lüksemburg">Lüksemburg</option>
              <option value="Macaristan">Macaristan</option>
              <option value="Makedonya">Makedonya</option>
              <option value="Maldivler">Maldivler</option>
              <option value="Malezya">Malezya</option>
              <option value="Malta">Malta</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Meksika">Meksika</option>
              <option value="Mısır">Mısır</option>
              <option value="Moldova">Moldova</option>
              <option value="Monako">Monako</option>
              <option value="Mozambik">Mozambik</option>
              <option value="Nikaragua">Nikaragua</option>
              <option value="Norveç">Norveç</option>
              <option value="Özbekistan">Özbekistan</option>
              <option value="Panama">Panama</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Polonya">Polonya</option>
              <option value="Portekiz">Portekiz</option>
              <option value="Porto Riko">Porto Riko</option>
              <option value="Romanya">Romanya</option>
              <option value="Rusya">Rusya</option>
              <option value="Saint Kitts ve Nevis">Saint Kitts ve Nevis</option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="San Marino">San Marino</option>
              <option value="Senegal">Senegal</option>
              <option value="Seyşel">Seyşel</option>
              <option value="Singapur">Singapur</option>
              <option value="Slovakya">Slovakya</option>
              <option value="Slovenya">Slovenya</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Suriye">Suriye</option>
              <option value="Suudi Arabistan">Suudi Arabistan</option>
              <option value="Şili">Şili</option>
              <option value="Tayland">Tayland</option>
              <option value="Tayvan">Tayvan</option>
              <option value="Tunus">Tunus</option>
              <option value="Turks ve Caicos Adaları">
                Turks ve Caicos Adaları
              </option>
              <option value="Ukrayna">Ukrayna</option>
              <option value="Umman">Umman</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Ürdün">Ürdün</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Yeni Zelanda">Yeni Zelanda</option>
              <option value="Yunanistan">Yunanistan</option>
            </select>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2 marginTop-10" for="text">
              Şehir
            </label>
            <input
              type="text"
              class="form-control"
              id="sehir"
              name="sehir"
              placeholder=""
              required
            />
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2 marginTop-10" for="text">
              İlçe / Semt
            </label>
            <input
              type="text"
              class="form-control"
              id="ilce"
              name="ilce"
              placeholder=""
              required
            />
          </div>
*/}
          <div class="form-group">
            <div class="checkbox">
              <label class="marginTop-10">
                <input type="checkbox" /> Kampanyalardan e-posta ve sms ile
                haberdar olmak istiyorum
              </label>
            </div>
          </div>
          <div class="form-group">
            <div class="checkbox">
              <label class="sozlesme">
                <input type="checkbox" /> Üyelik sözleşmesini okudum, kabul
                ediyorum.{"     "}
                <a href="#">(Sözleşmeyi görüntüle)</a>
              </label>
            </div>
          </div>

          <div class="btnuye-div">
            <button
              type="submit"
              name="submit"
              class="btn btn-default btnuye btn-block"
            >
              <AiFillSave style={{ marginRight: 10 }} />
              KAYIT OL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
