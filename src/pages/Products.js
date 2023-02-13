import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent.js";
import NavbarComponent from "../components/NavbarComponent.js";
import FooterComponent from "../components/FooterComponent.js";

function Products(props) {
  const [model, setModel] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    GetProduct();
  }, []);

  const handleMinPrice = (e) => {
    setMinPrice(e.target.value);
  };
  const handleMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };

  const objCategories = {
    minPrice: minPrice,
    maxPrice: maxPrice,
  };

  const GetProduct = () => {
    var API_PATH = "http://localhost:81/e-commerce-react/getProducts.php";
    axios
      .post(API_PATH)
      .then((response) => {
        const modelList = response.data;
        setModel(modelList);
        // model.push(modelList);
        console.log("basarili= ", model);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetCategories = (e) => {
    e.preventDefault();
    console.log("min= ", minPrice);
    console.log("max= ", maxPrice);
    var API_PATH = "http://localhost:81/e-commerce-react/getCategoriesProducts";
    axios
      .post(API_PATH, objCategories)
      .then((response) => {
        const modelList = response.data;
        setModel(modelList);
        console.log("basarili= ", model);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetCategoriesOrderByAsc = (e) => {
    e.preventDefault();
    var API_PATH =
      "http://localhost:81/e-commerce-react/getCategoriesOrderByAsc";
    axios
      .post(API_PATH)
      .then((response) => {
        const modelList = response.data;
        setModel(modelList);
        console.log("basarili= ", model);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetCategoriesOrderByDesc = (e) => {
    e.preventDefault();
    var API_PATH =
      "http://localhost:81/e-commerce-react/getCategoriesOrderByDesc";
    axios
      .post(API_PATH)
      .then((response) => {
        const modelList = response.data;
        setModel(modelList);
        console.log("basarili= ", model);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <BrowserRouter>
      <HeaderComponent />
      <NavbarComponent />

      <div
        class="container cerceve"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div class="col-md-3" style={{ marginRight: 20 }}>
          SIRALAMALAR
          <div class="form-group marginTop-10">
            <button
              onClick={GetCategoriesOrderByAsc}
              class="btn btn-default"
              type="submit"
              name="submit"
              style={{
                width: 240,
                backgroundColor: "#ad6290",
                height: 40,
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              fiyat artan
            </button>
          </div>
          <div class="form-group marginTop-10">
            <button
              onClick={GetCategoriesOrderByDesc}
              class="btn btn-default"
              type="submit"
              name="submit"
              style={{
                width: 240,
                backgroundColor: "#ad6290",
                height: 40,
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              fiyat azalan
            </button>
          </div>
          <p>kategori</p>
          <form
            // onSubmit={GetCategories}
            class="form-horizontal col-sm-offset-2 col-sm-7"
          >
            <div class="form-group marginTop-10">
              <label>En düşük fiyat</label>
              <input
                class="form-control"
                style={{
                  width: 240,
                  height: 40,
                }}
                min={0}
                type="number"
                placeholder=""
                onChange={handleMinPrice}
              />
            </div>
            <div class="form-group marginTop-10">
              <label>En yüksek fiyat</label>
              <input
                class="form-control"
                style={{
                  width: 240,
                  height: 40,
                }}
                min={0}
                type="number"
                placeholder=""
                onChange={handleMaxPrice}
              />
            </div>
            <div class="form-group marginTop-10">
              <button
                class="btn btn-default"
                type="submit"
                name="submit"
                style={{
                  width: 240,
                  backgroundColor: "#ad6290",
                  height: 40,
                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Ara
              </button>
            </div>
          </form>
          {/* <div class="form-group marginTop-10">
          <label>Renk</label>
          <select
            class="form-control"
            style={{
              width: 240,
              height: 40,
            }}
          >
            <option>Hepsi</option>
            <option>Beyaz</option>
            <option>Siyah</option>
            <option>Kırmızı</option>
            <option>Yeşil</option>
          </select>
        </div>
        <div class="form-group marginTop-10">
          <label>Boyut</label>
          <select
            class="form-control hasCustomSelect"
            style={{
              width: 240,
              height: 40,
            }}
          >
            <option>Hepsi</option>
            <option>Küçük</option>
            <option>Orta</option>
            <option>Büyük</option>
          </select>
        </div>*/}
        </div>

        <div class="col-md-9">
          <div class="row product-list">
            {model.map((item, index) => (
              <div class="col-sm-4">
                <a
                  key={index}
                  style={{ textDecoration: "none" }}
                  href={"/ProductView/" + index}
                >
                  <div class="urun-cerceve">
                    <div class="urun-resim">
                      <img src={item.urun_Resim} alt="" />
                    </div>
                    <div class="urun-metin">
                      <span>
                        {item.urun_Kod} <br></br> {item.urun_Ad}
                      </span>
                      <br></br>
                    </div>
                    <hr></hr>
                    <div class="urun-bottom">
                      <span class="urun-eski-fiyat">
                        <del>{item.urun_Eski_Fiyat} TL</del>
                      </span>
                      <br></br>
                      <span class="urun-yeni-fiyat">
                        {item.urun_Yeni_Fiyat} TL
                      </span>
                      <a>
                        <button
                          type="button"
                          class="btn btn-secondary btn-incele"
                        >
                          İncele
                        </button>
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
}
export default Products;
