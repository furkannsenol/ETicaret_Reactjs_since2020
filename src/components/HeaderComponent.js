import React, { Component, useState, useEffect } from "react";
import "../components/ComponentsV0.2.css";
import logo from "../logo.svg";
import { FiTruck } from "react-icons/fi";
import { BiBasket } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

const LocalStorageDelete = () => {
  window.localStorage.clear();
};

class HeaderComponent extends Component {
  render() {
    return (
      <section id="top-bar" style={{ marginTop: 20 }}>
        <div class="container">
          <div class="row">
            <div class="col-12  col-md-3" style={{ textAlign: "left" }}>
              <a href="/Homepage">
                {" "}
                <img
                  src={logo}
                  class="logo"
                  style={{ width: 50, height: 40 }}
                ></img>
              </a>
            </div>

            <div class="col-12 col-md-4">
              <form id="searchForm" action="urun-arama" method="POST">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    name="aranan"
                    placeholder="Aradığınız Her Şey"
                    widht="50%"
                  />
                  <span class="input-group-append">
                    <button class="btn btn-secondary" type="submit">
                      <BsSearch />
                    </button>
                  </span>
                </div>
              </form>
            </div>

            <div
              class="col-12 offset-md-1 col-md-4 topbar-link"
              style={{ marginTop: -5, textAlign: "right" }}
            >
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    <span
                      class="bi-truck"
                      style={{ marginRight: 4, fontSize: 20 }}
                    ></span>
                    Sipariş Takip
                  </a>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span
                      class="bi-person"
                      style={{ marginRight: 4, fontSize: 20 }}
                    ></span>
                    {window.localStorage.getItem("Id")
                      ? window.localStorage.getItem("Name")
                      : "Giriş"}
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {window.localStorage.getItem("Id") ? (
                      <a
                        class="dropdown-item"
                        style={{ width: "auto" }}
                        href={"/Profile"}
                        //href="/Profile"
                      >
                        Hesabım
                      </a>
                    ) : (
                      <a
                        class="dropdown-item"
                        style={{ width: "auto" }}
                        href="/Login"
                      >
                        Giriş yap
                      </a>
                    )}
                    {window.localStorage.getItem("Id") ? (
                      <a
                        class="dropdown-item"
                        href="#"
                        style={{ width: "auto" }}
                      >
                        Siparişlerim
                      </a>
                    ) : null}
                    {window.localStorage.getItem("Id") ? (
                      <a
                        class="dropdown-item"
                        style={{ width: "auto" }}
                        href="/Homepage"
                        onClick={() => LocalStorageDelete()}
                      >
                        Çıkış yap
                      </a>
                    ) : (
                      <a
                        class="dropdown-item"
                        style={{ width: "auto" }}
                        href="/Register"
                      >
                        Üye Ol
                      </a>
                    )}
                  </div>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/Basket">
                    <span
                      class="bi-cart3"
                      style={{ marginRight: 4, fontSize: 20 }}
                    ></span>
                    Sepet
                    <span class="badge" style={{ marginLeft: 3 }}>
                      0
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      // <div class="header">
      //   <div>
      //     <a href="/Homepage">
      //       <img src={logo} class="logo" style={{ width: 60 }}></img>
      //     </a>
      //   </div>
      //   <div class="searchDiv">
      //     <form class="d-flex">
      //       <input
      //         class="form-control"
      //         type="search"
      //         placeholder="Aradığınız her şey burada"
      //       ></input>
      //       <button class="btn btn-outline-success" type="submit">
      //         Arama
      //       </button>
      //     </form>
      //   </div>
      //   <div
      //     class="rightDiv"
      //     style={{ justifyContent: "center", alignItems: "center" }}
      //   >
      //     <a class="rightDivItem header-link" href="#">
      //       <FiTruck class="marginRight5" />
      //       Sipariş Takip
      //     </a>
      //     <a class="rightDivItem header-link" href="/Basket">
      //       <BiBasket class="marginRight5" />
      //       Sepet
      //       {/* {window.localStorage.getItem("Ad")} */}
      //       {/* <span class="spanSepet">0</span> */}
      //     </a>
      //     <a class="rightDivItem header-link" href="/Login">
      //       Giriş Yap
      //     </a>
      //   </div>
      // </div>
    );
  }
}
export default HeaderComponent;
