import React, { useEffect, useState } from "react";
import axios from "axios";
import Farmer from "./models/Farmer";

const App = () => {
  const url = "/getAboutFarmer";

  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.post(url);
        let farmers = [];
        data.data.map((item) => farmers.push(new Farmer(item)));
        setFarmers(farmers);
      } catch (error) {
        console.log(error, "error");
      }
    };

    getData();
  }, []);

  return (
    <div className="p-5">
      <h1>Our Farmers</h1>

      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Created Time</th>
            <th scope="col">Updated Time</th>
          </tr>
        </thead>
        <tbody>
          {farmers?.map((farmer, index) => (
            <tr key={farmer.id}>
              <th>{index + 1}</th>
              <td>{farmer.id}</td>
              <td>{farmer.title}</td>
              <td>{farmer.farmer_name}</td>
              <td>
                <img src={farmer.image} width={100} height={100} alt="farmer profile" />
              </td>
              <td>{farmer.created_time}</td>
              <td>{farmer.updated_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
