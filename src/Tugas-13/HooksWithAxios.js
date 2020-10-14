import React, { useState, useEffect } from "react";
import axios from "axios";

const HooksWithAxios = () => {
  const [dataBuah, setDataBuah] = useState(null);
  const [name, setName] = useState({ name: "", id: null });
  const [price, setPrice] = useState({ price: "", id: null });
  const [weight, setWeight] = useState({ weight: "", id: null });

  useEffect(() => {
    axios
      .get("http://backendexample.sanbercloud.com/api/fruits")
      .then((res) => {
        let dataBuah = res.data;
        setDataBuah(
          dataBuah.map((el) => {
            return {
              id: el.id,
              name: el.name,
              price: el.price,
              weight: el.weight,
            };
          })
        );
      });
  }, [dataBuah]);

  const handleDelete = (event) => {
    let idBuah = parseInt(event.target.value);
    axios
      .delete("http://backendexample.sanbercloud.com/api/fruits/{ID_FRUIT}")
      .then((res) => {
        let buahDelete = dataBuah.filter((x) => x.id !== idBuah);
        setDataBuah(buahDelete);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://backendexample.sanbercloud.com/api/fruits";
    const editUrl =
      "http://backendexample.sanbercloud.com/api/fruits/{ID_FRUIT}";
    const buahNama = name.name;
    const buahHarga = price.price;
    const buahBerat = weight.weight;
    const buahBaru = {
      name: buahNama,
      price: buahHarga,
      weight: buahBerat,
    };
    if (buahNama.id === null) {
      axios.post(url, buahBaru);
    } else {
      axios.put(editUrl, buahBaru);
    }
  };

  const handleEdit = (e) => {
    let idBuah = parseInt(e.target.value);
    const buahNama = name.name;
    const buahHarga = price.price;
    const buahBerat = weight.weight;
    const buahBaru = dataBuah.find((x) => x.id === idBuah);
    setName({
      id: idBuah,
      name: buahNama,
      price: buahHarga,
      weight: buahBerat,
    });
  };

  const inputBuah = (e) => {
    let value = e.target.value;
    let inputName = e.target.name;
    setName({ ...name, [inputName]: value });
    setPrice({ ...price, [inputName]: value });
    setWeight({ ...weight, [inputName]: value });
  };

  return (
    <div clasName="container-hooks">
      <table className="table-hooks">
        <thead>
          <tr>
            <td>Nama</td>
            <td>Price</td>
            <td>Weight</td>
          </tr>
        </thead>
        <tbody>
          {dataBuah !== null &&
            dataBuah.map((x, index) => {
              return (
                <tr key={x.id}>
                  <td>{x.name}</td>
                  <td>{x.price}</td>
                  <td>{x.weight}</td>
                  <td>
                    <button value={x.id} onClick={handleEdit}>
                      Edit
                    </button>
                    <button value={x.id} onClick={handleDelete}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <form onSubmit={handleSubmit} className="form-hooks">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          placeHolder="ex: cau"
          required
          value={name.name}
          onChange={inputBuah}
        />
        <label>Price:</label>
        <input
          type="number"
          name="price"
          autoComplete="off"
          placeHolder="ex: 1000"
          required
          value={price.price}
          onChange={inputBuah}
        />
        <label>Weight:</label>
        <input
          type="number"
          name="weight"
          autoComplete="off"
          placeHolder="ex: 1500"
          required
          value={weight.weight}
          onChange={inputBuah}
        />
        <button type="submit" value="submit" className="btn-hooks">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HooksWithAxios;
