import React, { Component } from "react";

class FooterComponent extends Component {
  render() {
    return (
      <div class="container-fluid footer1" style={{ marginTop: 30 }}>
        <div class="container">
          <div class="row">
            <div class="col-md-3 ">
              <h3 class="footer-title">MÜŞTERİ HİZMETLERİ</h3>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="footer-link">
                    Anlaşmalı Bankalar
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link">
                    Destek, Öneri ve Şikayet
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link">
                    Sıkça Sorulan Sorular
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link">
                    Sipariş Takibi
                  </a>
                </li>
                <li>
                  <a href="/Contact" class="footer-link">
                    İletişim
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-3">
              <h3 class="footer-title">KURUMSAL</h3>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="footer-link">
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link">
                    İnsan Kaynakları
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link">
                    Kariyer
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link">
                    Müşteri Hizmetleri
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link">
                    Bayi Girişi
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-3">
              <h3 class="footer-title">SIK SORULAN SORULAR</h3>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="footer-link">
                    Kargo Takibi
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link">
                    Gizlilik ve Güvenlik
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link">
                    Mesafeli Satış Sözleşmesi
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link">
                    Ödeme ve Teslimat
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link">
                    İade ve Değişimi
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-3">
              <h3 class="footer-title">İLETİŞİM</h3>
              <ul class="list-unstyled">
                <li>
                  <span class="bi-cursor" style={{ color: "#fff" }}></span>
                  <span class="footer-text" style={{ marginLeft: 5 }}>
                    21 Sokak Muhendislik, Edirne
                  </span>
                </li>
                <li>
                  <span class="bi-telephone" style={{ color: "#fff" }}></span>
                  <span class="footer-text" style={{ marginLeft: 5 }}>
                    +90 535 123456
                  </span>
                </li>
                <li>
                  <a href="mailto:#" class="footer-link">
                    <span
                      class="bi-envelope"
                      style={{ marginLeft: 0, color: "#fff" }}
                    ></span>{" "}
                    ahmetfurkanholdingS@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <hr style={{ borderColor: "#393939", marginTop: 10 }}></hr>

            <div class="row" style={{ marginTop: -10 }}>
              <div class="col-md-6">
                <div class="copyright-text">
                  <p>© 2021 Eticaret. Tüm Hakları Saklıdır.</p>
                </div>
              </div>
              <div class="col-md-6" style={{ textAlign: "right" }}>
                <div class="sosyalbutonlar">
                  <a
                    href="http://instagram.com"
                    target="_blank"
                    class="instagram"
                  >
                    <i class="bi-instagram" aria-hidden="true" />
                  </a>
                  <a href="http://twitter.com" target="_blank" class="twitter">
                    <i class="bi-twitter" aria-hidden="true" />
                  </a>
                  <a
                    href="http://facebook.com"
                    target="_blank"
                    class="facebook"
                  >
                    <i class="bi-facebook" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // <div class="container-fluid footer1" style={{ marginTop: "27%" }}>
      //   <div class="container">
      //     <div class="row">
      //       <div class="col-md-3 ">
      //         <h3 class="footer-title">MÜŞTERİ HİZMETLERİ</h3>
      //         <ul class="list-unstyled">
      //           <li>
      //             <a href="#" class="footer-link">
      //               Anlaşmalı Bankalar
      //             </a>
      //           </li>
      //           <li>
      //             <a href="#" class="footer-link">
      //               Destek, Öneri ve Şikayet
      //             </a>
      //           </li>
      //           <li>
      //             <a href="#" class="footer-link">
      //               Sıkça Sorulan Sorular
      //             </a>
      //           </li>
      //           <li>
      //             <a href="#" class="footer-link">
      //               Sipariş Takibi
      //             </a>
      //           </li>
      //           <li>
      //             <a href="/Contact" class="footer-link">
      //               İletişim
      //             </a>
      //           </li>
      //         </ul>
      //       </div>

      //       <div class="col-md-3">
      //         <h3 class="footer-title">KURUMSAL</h3>
      //         <ul class="list-unstyled">
      //           <li>
      //             <a href="#" class="footer-link">
      //               Hakkımızda
      //             </a>
      //           </li>
      //           <li>
      //             <a href="#" class="footer-link">
      //               İnsan Kaynakları
      //             </a>
      //           </li>
      //           <li>
      //             <a href="#" class="footer-link">
      //               Kariyer
      //             </a>
      //           </li>
      //           <li>
      //             <a href="#" class="footer-link">
      //               Müşteri Hizmetleri
      //             </a>
      //           </li>
      //           <li>
      //             <a href="#" class="footer-link">
      //               Bayi Girişi
      //             </a>
      //           </li>
      //         </ul>
      //       </div>

      //       <div class="col-md-3">
      //         <h3 class="footer-title">SIK SORULAN SORULAR</h3>
      //         <ul class="list-unstyled">
      //           <li>
      //             <a href="#" class="footer-link">
      //               Kargo Takibi
      //             </a>
      //           </li>
      //           <li>
      //             <a href="#" class="footer-link">
      //               Gizlilik ve Güvenlik
      //             </a>
      //           </li>
      //           <li>
      //             <a href="#" class="footer-link">
      //               Mesafeli Satış Sözleşmesi
      //             </a>
      //           </li>
      //           <li>
      //             <a href="#" class="footer-link">
      //               Ödeme ve Teslimat
      //             </a>
      //           </li>
      //           <li>
      //             <a href="#" class="footer-link">
      //               İade ve Değişimi
      //             </a>
      //           </li>
      //         </ul>
      //       </div>

      //       <div class="col-md-3">
      //         <h3 class="footer-title">İLETİŞİM</h3>
      //         <ul class="list-unstyled">
      //           <li>
      //             <span
      //               class="footer-text footerSpanTextMargin"
      //               style={{ justifyContent: "center", alignItems: "center" }}
      //             >
      //               <IoLocationSharp class="marginRight5" />
      //               21 Sokak Muhendislik, Edirne
      //             </span>
      //           </li>
      //           <li>
      //             <span
      //               class="footer-text footerSpanTextMargin"
      //               style={{ justifyContent: "center", alignItems: "center" }}
      //             >
      //               <AiFillPhone class="marginRight5" />
      //               +90 535 123456
      //             </span>
      //           </li>
      //           <li>
      //             <span
      //               class="footer-text footerSpanTextMargin"
      //               style={{ justifyContent: "center", alignItems: "center" }}
      //             ></span>
      //             <a href="mailto:#" class="footer-link footermail">
      //               <AiFillMail class="marginRight5" />
      //               ahmetfurkanholdingS@gmail.com
      //             </a>
      //           </li>
      //         </ul>
      //       </div>

      //       <hr></hr>

      //       <div class="row" style={{ marginTop: -10 }}>
      //         <div class="col-md-6">
      //           <div class="copyright-text">
      //             <p>© 2021 Eticaret. Tüm Hakları Saklıdır.</p>
      //           </div>
      //         </div>
      //         <div class="col-md-6" style={{ textAlign: "right" }}>
      //           <div class="sosyalbutonlar">
      //             <a
      //               href="http://instagram.com"
      //               target="_blank"
      //               class="instagram"
      //             >
      //               <FaInstagram />
      //             </a>
      //             <a href="http://twitter.com" target="_blank" class="twitter">
      //               <FaTwitter />
      //             </a>
      //             <a
      //               href="http://facebook.com"
      //               target="_blank"
      //               class="facebook"
      //             >
      //               <FaFacebook />
      //             </a>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
export default FooterComponent;
