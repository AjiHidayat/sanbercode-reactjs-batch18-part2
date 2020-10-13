import React from "react";

class FormBuah extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hargaBuah: [
        {
          nama: "Semangka",
          harga: 10000,
          berat: 1000,
        },
        {
          nama: "Anggur",
          harga: 40000,
          berat: 500,
        },
        {
          nama: "Strawberry",
          harga: 30000,
          berat: 400,
        },
        {
          nama: "Jeruk",
          harga: 30000,
          berat: 1000,
        },
        {
          nama: "Mangga",
          harga: 30000,
          berat: 500,
        },
      ],
      buahBaru: [
        {
          nama: "",
          harga: "",
          berat: "",
        },
      ],
    };
  }

  handleChangeNama = (event) => {
    this.setState({
      buahBaru: [
        {
          nama: event.target.value,
        },
      ],
    });
  };

  handleChangeHarga = (event) => {
    this.setState({
      buahBaru: [
        {
          harga: event.target.value,
        },
      ],
    });
  };

  handleChangeBerat = (event) => {
    this.setState({
      buahBaru: [
        {
          berat: event.target.value,
        },
      ],
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      hargaBuah: [...this.state.hargaBuah, ...this.state.buahBaru],
    });
  }

  render() {
    return (
      <div className="container-form-buah">
        <h1 className="heading-form-buah">Table Harga Buah</h1>
        <table className="table-form-buah">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {this.state.hargaBuah.map((item, i) => (
              <tr key={i}>
                <td>{item.nama}</td>
                <td>{item.harga}</td>
                <td>{item.berat/1000} kg</td>
                <td>
                  <button className="btn-adjust">Edit</button>
                  <button className="btn-adjust hps">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1 className="heading-form-buah">Tambah Data</h1>
        <form onSubmit={this.handleSubmit.bind(this)} className="form-buah">
          <label>Nama</label>
          <input
            onChange={this.handleChangeNama}
            value={this.state.buahBaru.nama}
            type="text"
            placeholder="Nama"
            required
          />
          <label>Harga</label>
          <input
            onChange={this.handleChangeHarga}
            value={this.state.buahBaru.harga}
            type="text"
            placeholder="Harga"
            required
          />
          <label>Berat</label>
          <input
            onChange={this.handleChangeBerat}
            value={this.state.buahBaru.berat}
            type="text"
            placeholder="Berat"
            required
          />
          <button className="btn-harga-buah">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormBuah;
