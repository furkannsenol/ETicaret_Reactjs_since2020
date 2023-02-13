import axios from "axios";
import React, { useState, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent.js";
import NavbarComponent from "../components/NavbarComponent.js";
import FooterComponent from "../components/FooterComponent.js";

function ProductView(props) {
  const [model, setModel] = useState([]);

  // const selectedProduct = model.find(
  //   (i) => i.urun_Id == props.match.params.urun_Id
  // );

  useEffect(() => {
    GetProduct();
  }, []);

  const GetProduct = () => {
    var API_PATH = "http://localhost:81/e-commerce-react/getProducts.php";
    axios
      .post(API_PATH)
      .then((response) => {
        const modelList = response.data;
        setModel(modelList[props.match.params.urun_Id]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <HeaderComponent />
      <NavbarComponent />
      <div class="container" style={{ marginTop: 50 }}>
        <div class="row">
          <div class="col-3">kategori</div>
          <div class="col-9">
            <div class="row">
              <div class="col-7">
                <div class="urun-incele-resim">
                  <a href="#">
                    <img src={model.urun_Resim} alt=""></img>
                  </a>
                </div>
              </div>
              <div class="col-5">
                <h1 class="incele-ad">{model.urun_Ad}</h1>
                <br></br>
                <span class="incele-kod">Ürün Kodu: {model.urun_Kod}</span>
                <br></br>
                <br></br>
                <span class="incele-kod">
                  Adet Fiyatı:
                  <del class="incele-eski-fiyat">
                    {model.urun_Eski_Fiyat} TL
                  </del>
                </span>
                <br></br>
                <br></br>
                <span class="incele-yeni-fiyat">
                  İndirimli Adet Fiyatı:
                  <span class="incele-yeni-fiyat2" style={{ marginLeft: 10 }}>
                    {model.urun_Yeni_Fiyat} TL
                  </span>
                </span>
                <hr></hr>
                <br></br>
                <div class=" row">
                  <div class="col-1">
                    <label for="text">Adet</label>
                  </div>
                  <div class="col-5" style={{ marginTop: -10, marginLeft: 10 }}>
                    <input
                      class="form-control"
                      style={{ marginLeft: 10, width: 100 }}
                      type="number"
                      value="100"
                      name="quantity"
                      step="10"
                    ></input>
                  </div>
                </div>
                <br></br>
                <div class="col-sm-12 ">
                  <button
                    class="btn btn-default"
                    style={{
                      width: 330,
                      backgroundColor: "#ad6290",
                      height: 45,
                      color: "white",
                      fontSize: 15,
                      fontWeight: "bold",
                      marginLeft: -15,
                    }}
                  >
                    SEPETE EKLE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container" style={{ marginTop: 50 }}>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
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
              Ürün Özellikleri
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
              Ürün Yorumları
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
              Teslimat ve İade
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
            Ürün Özellikleri
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            ...
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <div class="container seg">
        <h2 class="head text-center seg-title">Benzer Ürünler</h2>
        <hr></hr>
      </div>

      <div class="container" style={{ marginTop: 20 }}>
        <div class="row">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-3">
                <div class="urun-cerceve">
                  <div class="urun-resim">
                    <a href="#">
                      <img
                        class="img-rounded "
                        src="../images/urun3.jpg"
                        alt=""
                      ></img>
                    </a>
                  </div>

                  <div class="urun-metin">
                    <a href="#">
                      <span>Ürün Adı</span>
                      <br></br>
                      <span>Ürün Kodu</span>
                    </a>
                  </div>
                  <hr></hr>
                  <div class="urun-bottom">
                    <span class="urun-eski-fiyat">
                      <del>100 TL</del>
                    </span>
                    <br></br>
                    <span class="urun-yeni-fiyat">55 TL</span>
                    <a href="#">
                      <button
                        type="button"
                        class="btn btn-secondary btn-incele"
                      >
                        İncele
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="urun-cerceve">
                  <div class="urun-resim">
                    <a href="#">
                      <img
                        class="img-rounded "
                        src="../images/urun3.jpg"
                        alt=""
                      ></img>
                    </a>
                  </div>

                  <div class="urun-metin">
                    <a href="#">
                      <span>Ürün Adı</span>
                      <br></br>
                      <span>Ürün Kodu</span>
                    </a>
                  </div>
                  <hr></hr>
                  <div class="urun-bottom">
                    <span class="urun-eski-fiyat">
                      <del>100 TL</del>
                    </span>
                    <br></br>
                    <span class="urun-yeni-fiyat">55 TL</span>
                    <a href="#">
                      <button
                        type="button"
                        class="btn btn-secondary btn-incele"
                      >
                        İncele
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="urun-cerceve">
                  <div class="urun-resim">
                    <a href="#">
                      <img
                        class="img-rounded "
                        src="../images/urun3.jpg"
                        alt=""
                      ></img>
                    </a>
                  </div>

                  <div class="urun-metin">
                    <a href="#">
                      <span>Ürün Adı</span>
                      <br></br>
                      <span>Ürün Kodu</span>
                    </a>
                  </div>
                  <hr></hr>
                  <div class="urun-bottom">
                    <span class="urun-eski-fiyat">
                      <del>100 TL</del>
                    </span>
                    <br></br>
                    <span class="urun-yeni-fiyat">55 TL</span>
                    <a href="#">
                      <button
                        type="button"
                        class="btn btn-secondary btn-incele"
                      >
                        İncele
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="urun-cerceve">
                  <div class="urun-resim">
                    <a href="#">
                      <img
                        class="img-rounded "
                        src="../images/urun3.jpg"
                        alt=""
                      ></img>
                    </a>
                  </div>

                  <div class="urun-metin">
                    <a href="#">
                      <span>Ürün Adı</span>
                      <br></br>
                      <span>Ürün Kodu</span>
                    </a>
                  </div>
                  <hr></hr>
                  <div class="urun-bottom">
                    <span class="urun-eski-fiyat">
                      <del>100 TL</del>
                    </span>
                    <br></br>
                    <span class="urun-yeni-fiyat">55 TL</span>
                    <a href="#">
                      <button
                        type="button"
                        class="btn btn-secondary btn-incele"
                      >
                        İncele
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
export default ProductView;
