import HeaderComponent from "../components/HeaderComponent.js";
import NavbarComponent from "../components/NavbarComponent.js";
import FooterComponent from "../components/FooterComponent.js";

function Homepage() {
  return (
    <div>
      <HeaderComponent />
      <NavbarComponent />
      <br></br>
      <div class="container">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100 h-50"
                src="https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/06-2021/babalar-oppo-a74-16-haz-web.jpg"
                alt="First slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 h-50"
                src="https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/06-2021/dell-banner-1-haziran-web.jpg"
                alt="First slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 h-50"
                src="https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/06-2021/Eurocup_TheOne_1336x380.jpg"
                alt="First slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 h-50"
                src="https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/05-2021/tv-samsung-kamp-26-mayis-web.jpg"
                alt="First slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 h-50"
                src="https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/06-2021/spor-tcl-banner-web-17-haz.jpg"
                alt="First slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 h-50"
                src="https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/05-2021/msi-VATAN-1336x380-banner-18.05.2021.jpg"
                alt="First slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 h-50"
                src="https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/06-2021/Eurocup_TheOne_1336x380.jpg"
                alt="First slide"
              ></img>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <br></br>

      <br></br>
      <div class="container " style={{ marginTop: 20 }}>
        <ul class=" list-inline" style={{ textAlign: "center" }}>
          <li
            class="list-inline-item"
            style={{
              borderRight: "1px solid #d8d8d8",
              paddingTop: 0,
              paddingBot: 0,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <img
              border="0"
              src="../images/reklam1.png"
              style={{ marginTop: -10 }}
            />
            <span style={{ marginLeft: 5 }}>GÜVENLİ ALIŞVERİŞ</span>
          </li>
          <li
            class="list-inline-item "
            style={{
              borderRight: "1px solid #d8d8d8",
              paddingTop: 0,
              paddingBot: 0,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <img src="../images/reklam2.png" style={{ marginTop: -3 }} />
            <span style={{ marginLeft: 10 }}>5 İŞ GÜNÜNDE KARGODA</span>
          </li>
          <li
            class="list-inline-item "
            style={{
              borderRight: "1px solid #d8d8d8",
              paddingTop: 0,
              paddingBot: 0,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <img src="../images/reklam3.png" />{" "}
            <span style={{ marginLeft: 10 }}>MÜŞTERİ MEMNUNİYETİ</span>
          </li>
          <li
            class="list-inline-item "
            style={{ paddingBot: 0, paddingLeft: 10, paddingRight: 10 }}
          >
            <img src="../images/reklam4.png" />{" "}
            <span style={{ marginLeft: 10 }}>2128744562 </span>
          </li>
        </ul>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <div class="container seg">
        <h2 class="head text-center seg-title">Yeni Ürünler</h2>
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

      <br></br>
      <br></br>
      <br></br>
      <div class="container">
        <img
          src="../images/Banner.png"
          class="img-fluid"
          style={{ marginTop: 5, width: "auto" }}
        />
      </div>

      <br></br>
      <br></br>
      <br></br>
      <div class="container seg">
        <h2 class="head text-center seg-title">Efsane Kampanyalar</h2>
        <hr></hr>
      </div>

      <div class="container" style={{ marginTop: 20 }}>
        <div class="row">
          <div class="col-4">
            <img src="../images/kampanya.png" class="img-fluid" />
          </div>
          <div class="col-4">
            <img src="../images/kampanya.png" class="img-fluid" />
          </div>
          <div class="col-4">
            <img src="../images/kampanya.png" class="img-fluid" />
          </div>
        </div>
        <br></br>
        <br></br>
        <div class="row">
          <div class="col-5">
            <img src="../images/kampanya2.png" class="img-fluid" />
          </div>
          <div class="col-7">
            <img src="../images/kampanya3.png" class="img-fluid" />
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <div class="container seg">
        <h2 class="head text-center seg-title">İlginizi Çekebilecek Ürünler</h2>
        <hr></hr>
      </div>
      <div class="container" style={{ marginTop: 20 }}>
        <div
          id="carouselExampleIndicators2"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators2"
              data-slide-to="0"
              class="active"
            ></li>
            <li
              data-target="#carouselExampleIndicators2"
              data-slide-to="1"
            ></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
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

            <div class="carousel-item">
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
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <div class="container">
        <img
          src="../images/banner2.jpg"
          class="img-fluid"
          style={{ marginTop: 5, width: "auto" }}
        />
      </div>

      <br></br>
      <br></br>
      <br></br>
      <div class="container seg">
        <h2 class="head text-center seg-title">Son Teknolojiler Burada</h2>
        <hr></hr>
      </div>

      <div class="container" style={{ marginBottom: 30 }}>
        <div class="row">
          <div class="col-5">
            <img src="../images/kampanya2.png" class="img-fluid" />
          </div>
          <div class="col-7">
            <img src="../images/kampanya3.png" class="img-fluid" />
          </div>
        </div>
        <br></br>
        <br></br>
        <div class="row">
          <div class="col-5">
            <div class="row">
              <div class="col-6">
                <img src="../images/kampanya2.png" class="img-fluid" />
              </div>
              <div class="col-6">
                <img src="../images/kampanya2.png" class="img-fluid" />
              </div>
            </div>
            <div class="row" style={{ marginTop: 20 }}>
              <div class="col-6">
                <img src="../images/kampanya2.png" class="img-fluid" />
              </div>
              <div class="col-6">
                <img src="../images/kampanya2.png" class="img-fluid" />
              </div>
            </div>
          </div>
          <div class="col-7">
            <img src="../images/kampanya3.png" class="img-fluid" />
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

export default Homepage;
