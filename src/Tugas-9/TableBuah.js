import React, {Component} from 'react';

class TableBuah extends Component{
    render(){
        return(
            <div className="container">
        <h1>Form Pembelian Buah</h1>
        <div className="content">
          <div className="title-content">
            <h4>Nama Pelanggan</h4>
            <h4>Daftar Item</h4>
          </div>
          <div className="form">
            <input id="text-input" type="text" />
            <div className="check">
              <input type="checkbox" />
              <label>Semangka</label>
            </div>
            <div className="check">
              <input type="checkbox" />
              <label>Jeruk</label>
            </div>
            <div className="check">
              <input type="checkbox" />
              <label>Nanas</label>
            </div>
            <div className="check">
              <input type="checkbox" />
              <label>Salak</label>
            </div>
            <div className="check">
              <input type="checkbox" />
              <label>Anggur</label>
            </div>
          </div>
        </div>
        <div className="btn-submit">
          <button className="btn-primary">Kirim</button>
        </div>
      </div>
        )
    }
}

export default TableBuah;
