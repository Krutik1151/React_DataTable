// App.js
import React, { useState, useEffect } from 'react';
import DataTableComponent from './DataTableComponent';

const App = () => {
  const [data, setData] = useState([]);

 

  const fetchData = () => {
    let apiAdd = "https://api.slingacademy.com/v1/sample-data/users?offset=0&limit=50";
    fetch(apiAdd)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.users);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  useEffect(() => {
    fetchData();
    console.log("Fetching data")
  }, []);
  return (
    <div className="container">
      <h1>React DataTable Example</h1>
      <DataTableComponent data={data} fetchData={fetchData} />
    </div>
  );
};

export default App;
