import "../css/Pages.css";
import { AiFillSave } from "react-icons/ai";
import axios from "axios";
import React, { useState } from "react";
import Cards from "react-credit-cards";
import CreditCard from "../css/CreditCard.css";

function AddCreditCard() {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputFocus = (e) => {
    setFocus(e.target.value);
  };

  const handleCvc = (e) => {
    setCvc(e.target.value);
  };
  const handleExpiry = (e) => {
    setExpiry(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  // handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  return (
    <div class="container uyecerceve">
      <div class="member-title">KART EKLE </div>
      <div id="PaymentForm">
        <div class="row">
          <div class="col-sm-6" style={{ marginTop: 30 }}>
            <Cards
              cvc={cvc}
              expiry={expiry}
              focused={focus}
              name={name}
              number={number}
              locale={"xx/xx"}
              placeholders={"xxxxxx xxxxxx"}
            />
          </div>

          <div class="col-sm-6" style={{ marginTop: 30 }}>
            <form>
              <div class="form-group col-sm-8">
                <input
                  class="form-control"
                  type="text"
                  name="number"
                  placeholder="Kart Numarası"
                  required
                  maxlength="16"
                  onChange={handleNumber}
                  onFocus={handleInputFocus}
                ></input>
              </div>
              <div class="form-group col-sm-8">
                <input
                  class="form-control"
                  type="text"
                  name="namelastname"
                  placeholder="Ad Soyad"
                  required
                  onChange={handleName}
                  onFocus={handleInputFocus}
                ></input>
              </div>
              <div class="row" style={{ marginLeft: 0 }}>
                <div class="form-group col-sm-4">
                  <input
                    class="form-control"
                    type="text"
                    name="tarih"
                    placeholder="Tarih"
                    required
                    maxlength="4"
                    onChange={handleExpiry}
                    onFocus={handleInputFocus}
                  ></input>
                </div>
                <div class="form-group col-sm-3">
                  <input
                    class="form-control"
                    type="text"
                    name="cvc"
                    placeholder="cvc"
                    required
                    maxlength="3"
                    onChange={handleCvc}
                    onFocus={handleInputFocus}
                  ></input>
                </div>
              </div>
              <div class="btnuye-div">
                <button
                  type="submit"
                  name="submit"
                  class="btn btn-default btnuye btn-block"
                >
                  <AiFillSave style={{ marginRight: 10 }} />
                  KARTI KAYDET
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCreditCard;
