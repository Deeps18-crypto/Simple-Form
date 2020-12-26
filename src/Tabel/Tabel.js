import React, { useState, useEffect } from "react";
import "./Tabel.css";
import axios from "axios";
import Spinner from "../Spinner";

function Tabel() {
  const [datas, setdatas] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setloading(true);
      const request = await axios.get(
        "https://simple-form-17f62-default-rtdb.firebaseio.com/data.json"
      );

      let fetchdata = [];
      for (let key in request.data) {
        fetchdata.push({ ...request.data[key], id: key });
      }
      setdatas(fetchdata);
      setloading(false);
      return request;
    }
    fetchData();
  }, []);

  let data = (
    <table className="table__table">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>PhoneNumber</th>
      </tr>
      {datas.map((datas) => (
        <tr key={datas.id}>
          <td>{datas.name}</td>
          <td>{datas.email}</td>
          <td>{datas.phone}</td>
        </tr>
      ))}
    </table>
  );
  if (loading) {
    data = <Spinner />;
  }
  return <div className="table">{data}</div>;
}

export default Tabel;
