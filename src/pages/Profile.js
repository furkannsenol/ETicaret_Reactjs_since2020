import HeaderComponent from "../components/HeaderComponent.js";
import NavbarComponent from "../components/NavbarComponent.js";
import FooterComponent from "../components/FooterComponent.js";
import ForgotPassword from "../pages/ForgotPassword.js";
import { AiFillSave } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Profile() {
  const [Id, setId] = useState("");
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [model, setModel] = useState([]);
  const [addressModel, setAddressModel] = useState([]);
  const [userModel, setUserModel] = useState([]);

  //adres ekleme
  const [baslik, setBaslik] = useState("");
  const [sehir, setSehir] = useState("");
  const [ilce, setIlce] = useState("");
  const [mahalle, setMahalle] = useState("");
  const [telefon, setTelefon] = useState("");
  const [pkodu, setPkodu] = useState("");
  const [acikAdres, setAcikAdres] = useState("");

  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
  };

  //adres ekleme
  const handleBaslik = (e) => {
    setBaslik(e.target.value);
  };
  const handleSehir = (e) => {
    setSehir(e.target.value);
  };
  const handleIlce = (e) => {
    setIlce(e.target.value);
  };
  const handleMahalle = (e) => {
    setMahalle(e.target.value);
  };
  const handleTelefon = (e) => {
    setTelefon(e.target.value);
  };
  const handlePkodu = (e) => {
    setPkodu(e.target.value);
  };
  const handleAcikAdres = (e) => {
    setAcikAdres(e.target.value);
  };

  useEffect(() => {
    setId(window.localStorage.getItem("Id"));
    setMail(window.localStorage.getItem("Email"));
    setName(window.localStorage.getItem("Name"));
    setLastname(window.localStorage.getItem("Lastname"));
    getAddress();
  }, []);

  const obj = {
    Id: Id,
    mail: mail,
    name: name,
    lastname: lastname,
  };

  const objAddress = {
    Id: Id,
    baslik: baslik,
    sehir: sehir,
    ilce: ilce,
    mahalle: mahalle,
    telefon: telefon,
    pkodu: pkodu,
    acikAdres: acikAdres,
  };

  const objId = {
    Id: Id,
  };

  const UserUpdate = (e) => {
    e.preventDefault();
    model.push(obj);
    var API_PATH = "http://localhost:81/e-commerce-react/updateUser.php";
    axios
      .post(API_PATH, obj)
      .then((response) => {
        const modelList = response.data;
        console.log(modelList);
        UpdateStorage();
      })
      .catch((error) => {
        console.log(error);
        alert("guncelleme hatasi.");
      });
  };

  const UpdateStorage = () => {
    window.localStorage.setItem("Email", mail);
    window.localStorage.setItem("Name", name);
    window.localStorage.setItem("Lastname", lastname);
    window.location.reload();
  };

  const AddAddress = (e) => {
    e.preventDefault();
    model.push(objAddress);
    var API_PATH = "http://localhost:81/e-commerce-react/AddressInsert.php";
    axios
      .post(API_PATH, objAddress)
      .then((response) => {
        console.log(response);
        console.log("basarili= ", model);
        window.location.reload();
        alert("adres eklendi.");
      })
      .catch((error) => {
        console.log(error);
        alert("adres ekleme hatası.");
      });
  };

  const getAddress = () => {
    addressModel.push(objId);
    var API_PATH = "http://localhost:81/e-commerce-react/getAddress.php";
    axios
      .get(API_PATH, objId)
      .then((response) => {
        const modelList = response.data;
        setAddressModel(modelList);
        console.log("basarili= ", addressModel);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const DeleteAddress = () => {
  //   addressModel.push(objId);
  //   var API_PATH = "http://localhost:81/e-commerce-react/deleteAddress.php";
  //   axios
  //     .get(API_PATH, objDelete)
  //     .then((response) => {
  //       const modelList = response.data;
  //       setAddressModel(modelList);
  //       console.log("basarili= ", addressModel);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <HeaderComponent />
      <NavbarComponent />

      <div class="container uyecerceve" style={{ marginTop: 50 }}>
        <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Bilgilerim
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Adreslerim
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Ödeme Seçenekleri
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#pass"
              type="button"
              role="tab"
              aria-controls="pass"
              aria-selected="false"
            >
              Şifre Talebi
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div class="container uyecerceve">
              <div class="member-title">BİLGİLERİM</div>
              <div class="centerForm">
                <form
                  onSubmit={UserUpdate}
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
                      value={mail}
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
                      value={name}
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
                      value={lastname}
                    />
                  </div>

                  <div class="btnuye-div">
                    <button
                      type="submit"
                      name="submit"
                      class="btn btn-default btnuye btn-block"
                    >
                      <AiFillSave style={{ marginRight: 10 }} />
                      Güncelle
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div
              class="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">
                      ADRES EKLE
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="container uyecerceve">
                      <div class="member-title">YENİ ADRES</div>
                      <div class="centerForm">
                        <form
                          onSubmit={AddAddress}
                          class="form-horizontal col-sm-offset-2 col-sm-12"
                        >
                          <div class="form-group">
                            <label class="control-label col-sm-5">
                              Adres başlığı
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="baslik"
                              name="baslik"
                              placeholder=""
                              required
                              onChange={handleBaslik}
                            />
                          </div>
                          <div class="form-group">
                            <label class="control-label col-sm-5 marginTop-10">
                              Şehir
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="sehir"
                              name="sehir"
                              placeholder=""
                              required
                              onChange={handleSehir}
                            />
                          </div>
                          <div class="form-group">
                            <label class="control-label col-sm-5 marginTop-10">
                              İlçe
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="ilce"
                              name="ilce"
                              placeholder=""
                              required
                              onChange={handleIlce}
                            />
                          </div>
                          <div class="form-group">
                            <label class="control-label col-sm-5 marginTop-10">
                              Mahalle
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="mahalle"
                              name="mahalle"
                              placeholder=""
                              required
                              onChange={handleMahalle}
                            />
                          </div>
                          <div class="form-group">
                            <label class="control-label col-sm-5 marginTop-10">
                              Telefon
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              id="telefon"
                              name="telefon"
                              placeholder=""
                              required
                              onChange={handleTelefon}
                            />
                          </div>
                          <div class="form-group">
                            <label class="control-label col-sm-5 marginTop-10">
                              Posta Kodu
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              id="pkodu"
                              name="pkodu"
                              placeholder=""
                              required
                              onChange={handlePkodu}
                            />
                          </div>
                          <div class="form-group">
                            <label class="control-label col-sm-5 marginTop-10">
                              Açık Adres
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="acikAdres"
                              name="acikAdres"
                              placeholder=""
                              required
                              onChange={handleAcikAdres}
                            />
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btnuye"
                              style={{
                                width: 80,
                                height: 40,
                                color: "white",
                                backgroundColor: "gray",
                                borderColor: "gray",
                              }}
                              data-dismiss="modal"
                            >
                              Çıkış
                            </button>
                            <button
                              type="submit"
                              name="submit"
                              class="btnuye"
                              style={{ width: 80, height: 40 }}
                            >
                              Ekle
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-12">
              <div class="row">
                {addressModel.map((item, index) => (
                  <div class="col-md-3 marginTop-10 deneme">
                    <a
                      key={index}
                      style={{ textDecoration: "none", color: "black" }}
                      href={"/AddressDetail/" + index}
                    >
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">{item.adres_Baslik}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">
                            {item.adres_Telefon}
                          </h6>
                          <p class="card-text">{item.adres_Acik}</p>

                          <div class="urun-metin">
                            <span>
                              {item.adres_Sehir} - {item.adres_Ilce}
                            </span>
                          </div>

                          <div class="urun-metin">
                            <span>
                              {item.adres_Mahalle} - {item.adres_PostaKodu}
                            </span>
                          </div>
                          {/* <div class="urun-metin">
                            <button
                              type="submit"
                              name="submit"
                              class="btnuye"
                              style={{ width: 80, height: 40, marginTop: 20 }}
                            >
                              Sil
                            </button>
                          </div> */}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
                <div class="col-md-3">
                  <div class="card-body">
                    <AiOutlinePlusCircle
                      type="button"
                      // class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      style={{ height: 32, width: 32 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div class="col-md-12">
              <div class="row">
                {/* {addressModel.map((item, index) => (
                  <div class="col-md-3 marginTop-10 deneme">
                    <a
                      key={index}
                      style={{ textDecoration: "none", color: "black" }}
                      href={"/AddressDetail/" + index}
                    >
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">{item.adres_Baslik}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">
                            {item.adres_Telefon}
                          </h6>
                          <p class="card-text">{item.adres_Acik}</p>

                          <div class="urun-metin">
                            <span>
                              {item.adres_Sehir} - {item.adres_Ilce}
                            </span>
                          </div>

                          <div class="urun-metin">
                            <span>
                              {item.adres_Mahalle} - {item.adres_PostaKodu}
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))} */}
                <div class="col-md-3">
                  <div class="card-body">
                    <a
                      class="nav-link"
                      href="/AddCreditCard"
                      style={{ color: "black" }}
                    >
                      <AiOutlinePlusCircle
                        type="button"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        style={{ height: 32, width: 32 }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pass"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <ForgotPassword />
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Profile;
