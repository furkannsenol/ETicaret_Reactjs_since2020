//rcc tab
import React, { Component } from "react";
import "./Components.css";

class NavbarComponent extends Component {
  render() {
    return (
      <section id="menu">
        <nav
          class="navbar  navbar-expand-lg bg-white"
          style={{ marginTop: 20, border: "1px solid #ddd" }}
        >
          <div class="container">
            <div class="navbar-brand">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="container col-sm-12" style={{ margin: -10 }}>
              <div
                class="collapse navbar-collapse justify-content-center"
                id="navbarNav"
              >
                <ul class="navbar-nav menu-stil col-sm-12" style={{}}>
                  <li class="nav-item col-sm-3" style={{ textAlign: "center" }}>
                    <a class="nav-link " href="/Homepage">
                      ANA SAYFA<span class="sr-only"></span>
                    </a>
                  </li>
                  <li class="nav-item col-sm-3" style={{ textAlign: "center" }}>
                    <a class="nav-link" href="/Products">
                      TÜM ÜRÜNLER
                    </a>
                  </li>
                  <li class="nav-item col-sm-3" style={{ textAlign: "center" }}>
                    {window.localStorage.getItem("Id") ? (
                      <a class="nav-link" href="/Profile">
                        HAKKIMIZDA
                      </a>
                    ) : (
                      <a class="nav-link" href="/Login">
                        HAKKIMIZDA
                      </a>
                    )}
                  </li>
                  <li class="nav-item col-sm-3" style={{ textAlign: "center" }}>
                    <a class="nav-link" href="/Contact">
                      İLETİŞİM{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
      // <div class="navbarContainer">
      //   <div>
      //     <a
      //       class="nav-link itemText nav-link"
      //       aria-current="page"
      //       href="/Homepage"
      //     >
      //       ANASAYFA
      //     </a>
      //   </div>
      //   <div>
      //     <a class="nav-link itemText nav-link" href="#">
      //       PROFİL
      //     </a>
      //   </div>
      //   <div>
      //     <a class="nav-link itemText nav-link" href="/Products">
      //       ÜRÜNLER
      //     </a>
      //   </div>
      //   <div>
      //     <a class="nav-link itemText nav-link" href="/Contact">
      //       İLETİŞİM
      //     </a>
      //   </div>
      // </div>
    );
  }
}
export default NavbarComponent;
