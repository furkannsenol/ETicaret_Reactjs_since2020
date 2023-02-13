import "../css/Pages.css";
import "../css/Bootstrap.css";
import { BiTrash, BiArrowBack, BiCartAlt } from "react-icons/bi";

function Basket() {
  return (
    <div class="container" style={{ marginTop: 50 }}>
      <div class="row">
        <h2 align="center" style={{ marginBottom: 60, color: "gray" }}>
          Alışveriş Sepetiniz
        </h2>
        <div class="col-sm-9 marginTop-10">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th width="40%">Ürün İsmi</th>
                <th width="10%">Adet</th>
                <th width="10%">Fiyat</th>
                <th width="15%">Tutar</th>
                <th width="25%">İşlem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ürün adı</td>
                <td>ürün adedi</td>
                <td>ürün fiyatı</td>
                <td>toplam tutar</td>
                <td>
                  <a class="btn btn-default" href="#">
                    <BiTrash class="marginLeft-10" /> Sepetten çıkar
                  </a>
                </td>
              </tr>
              <tr>
                <td>ürün adı</td>
                <td>ürün adedi</td>
                <td>ürün fiyatı</td>
                <td>toplam tutar</td>
                <td>
                  <a class="btn btn-default" href="#">
                    <BiTrash class="marginLeft-10" /> Sepetten çıkar
                  </a>
                </td>
              </tr>

              <tr>
                <td colspan="5" align="left">
                  <a href="/Homepage">
                    <button class="btn btn-default">
                      <BiArrowBack /> Alışverişe devam et
                    </button>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-sm-3">
          <div id="Sepet_Div_Ozet" class="marginTop-10">
            <div class="Baslik efCl_1">Sepet Özeti</div>
            <div class="Fiyatlar">
              <div class="marginTop-10">
                ARA TOPLAM
                <div class="col-md-6 col-sm-6 col-xs-6 Fiyat">XXX TL</div>
              </div>

              <div class="marginTop-10">
                KDV Tutarı
                <div class="col-md-6 col-sm-6 col-xs-6 Fiyat">YYY TL</div>
              </div>

              <div class="marginTop-10">
                Genel Toplam
                <div class="col-md-6 col-sm-4 col-xs-4 Fiyat_2">ZZZ TL</div>
              </div>
            </div>
            <div style={{ marginTop: 20 }}></div>
            <a
              href="#"
              class="btn btn-primary btn-block p_tb_10"
              style={{
                color: "white",
                backgroundColor: "#61A119",
                borderColor: "#4D8014",
              }}
            >
              <BiCartAlt /> Ödemeyi tamamla
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Basket;
