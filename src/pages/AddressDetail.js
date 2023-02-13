import axios from "axios";
import React, { useState, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent.js";
import NavbarComponent from "../components/NavbarComponent.js";
import FooterComponent from "../components/FooterComponent.js";
import { AiFillSave, AiFillDelete } from "react-icons/ai";
import { useHistory } from "react-router-dom";

function AddressDetail(props) {
  const [Id, setId] = useState("");
  const [baslik, setBaslik] = useState("");
  const [sehir, setSehir] = useState("");
  const [ilce, setIlce] = useState("");
  const [mahalle, setMahalle] = useState("");
  const [telefon, setTelefon] = useState("");
  const [pkodu, setPkodu] = useState("");
  const [acikAdres, setAcikAdres] = useState("");
  const [model, setModel] = useState([]);

  const history = useHistory();

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
    GetAddress();
  }, []);

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

  const objDeleteAddress = {
    Id: Id,
  };

  const GetAddress = () => {
    var API_PATH = "http://localhost:81/e-commerce-react/getAddress.php";
    axios
      .post(API_PATH)
      .then((response) => {
        const modelList = response.data[props.match.params.adres_Uye_Id];
        const selectingAdresId = modelList.adres_Id;
        const selectingBaslik = modelList.adres_Baslik;
        const selectingSehir = modelList.adres_Sehir;
        const selectingIlce = modelList.adres_Ilce;
        const selectingMahalle = modelList.adres_Mahalle;
        const selectingTelefon = modelList.adres_Telefon;
        const selectingPKodu = modelList.adres_PostaKodu;
        const selectingAcik = modelList.adres_Acik;
        setId(selectingAdresId);
        setBaslik(selectingBaslik);
        setSehir(selectingSehir);
        setIlce(selectingIlce);
        setMahalle(selectingMahalle);
        setTelefon(selectingTelefon);
        setPkodu(selectingPKodu);
        setAcikAdres(selectingAcik);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const AddressUpdate = (e) => {
    e.preventDefault();
    model.push(objAddress);
    var API_PATH = "http://localhost:81/e-commerce-react/updateAddress.php";
    axios
      .post(API_PATH, objAddress)
      .then((response) => {
        const modelList = response.data;
        console.log(modelList);
        alert("guncelleme basarili.");
        history.push("/Profile");
      })
      .catch((error) => {
        console.log(error);
        alert("guncelleme hatasi.");
      });
  };

  const AddressDelete = (e) => {
    e.preventDefault();
    model.push(objDeleteAddress);
    var API_PATH = "http://localhost:81/e-commerce-react/deleteAddress.php";
    axios
      .post(API_PATH, objDeleteAddress)
      .then((response) => {
        const modelList = response.data;
        console.log(modelList);
        alert("adres silme basarili.");
        history.push("/Profile");
      })
      .catch((error) => {
        console.log(error);
        alert("silme hatasi.");
      });
  };

  return (
    <div>
      <HeaderComponent />
      <NavbarComponent />
      <div class="container uyecerceve">
        <div class="member-title">ADRES DÜZENLE</div>
        <div class="centerForm">
          <form class="form-horizontal col-sm-offset-2 col-sm-7">
            <div class="form-group">
              <label class="control-label col-sm-5">Adres başlığı</label>
              <input
                type="text"
                class="form-control"
                id="baslik"
                name="baslik"
                placeholder=""
                required
                onChange={handleBaslik}
                value={baslik}
              />
            </div>
            <div class="form-group">
              <label class="control-label col-sm-5 marginTop-10">Şehir</label>
              <input
                type="text"
                class="form-control"
                id="sehir"
                name="sehir"
                placeholder=""
                required
                onChange={handleSehir}
                value={sehir}
              />
            </div>
            <div class="form-group">
              <label class="control-label col-sm-5 marginTop-10">İlçe</label>
              <input
                type="text"
                class="form-control"
                id="ilce"
                name="ilce"
                placeholder=""
                required
                onChange={handleIlce}
                value={ilce}
              />
            </div>
            <div class="form-group">
              <label class="control-label col-sm-5 marginTop-10">Mahalle</label>
              <input
                type="text"
                class="form-control"
                id="mahalle"
                name="mahalle"
                placeholder=""
                required
                onChange={handleMahalle}
                value={mahalle}
              />
            </div>
            <div class="form-group">
              <label class="control-label col-sm-5 marginTop-10">Telefon</label>
              <input
                type="number"
                class="form-control"
                id="telefon"
                name="telefon"
                placeholder=""
                required
                onChange={handleTelefon}
                value={telefon}
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
                value={pkodu}
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
                value={acikAdres}
              />
            </div>

            <div class="form-group sideBySide">
              <div class="btnuye-div">
                <button
                  type="submit"
                  name="sil"
                  class="btn btn-default btnuye btn-block"
                  onClick={AddressDelete}
                >
                  <AiFillDelete style={{ marginRight: 10 }} />
                  Sil
                </button>
              </div>

              <div class="btnuye-div">
                <button
                  type="submit"
                  name="guncelle"
                  class="btn btn-default btnuye btn-block"
                  onClick={AddressUpdate}
                >
                  <AiFillSave style={{ marginRight: 10 }} />
                  Güncelle
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

export default AddressDetail;
