import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="container">
        <h1>Form Pembelian Buah</h1>
        <div class="content">
          <div class="title-content">
            <h4>Nama Pelanggan</h4>
            <h4>Daftar Item</h4>
          </div>
          <div class="form">
            <input id="text-input" type="text" />
            <div class="check">
              <input type="checkbox" />
              <label>Semangka</label>
            </div>
            <div class="check">
              <input type="checkbox" />
              <label>Jeruk</label>
            </div>
            <div class="check">
              <input type="checkbox" />
              <label>Nanas</label>
            </div>
            <div class="check">
              <input type="checkbox" />
              <label>Salak</label>
            </div>
            <div class="check">
              <input type="checkbox" />
              <label>Anggur</label>
            </div>
          </div>
        </div>
        <div class="btn-submit">
          <button class="btn-primary">Kirim</button>
        </div>
      </div>
    </div>
  );
}

export default App;
