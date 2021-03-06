import React, {Component} from "react";
import "./tableHargaBuah.css"

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500},
  ]

class HargaBuah extends Component{
    render(){
        return (
          <>
            <div className="harga-buah">
                <h1>Tabel Harga Buah</h1>
              <table>
                <thead>
                  <tr>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                  </tr>
                </thead>
                <tbody>
                {dataHargaBuah.map((items,i)=>(
                    <tr key={i}>
                        <td>{items.nama}</td>
                        <td>{items.harga}</td>
                        <td>{items.berat/1000} kg</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </>
        );
    } 
}



export default HargaBuah;