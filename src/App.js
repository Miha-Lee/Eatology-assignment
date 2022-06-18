import React, { useState, useEffect } from "react";
import List from "./Component/List";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const url = "https://ergon-ms-gixholtv4q-df.a.run.app/api/bountyAd";
function App() {
  const [jobList, setJobList] = useState([]);
  const fetchData = async () => {
    const response = await fetch(url);
    const jobs = await response.json();
    setJobList(jobs.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
        Job offer:
      </h3>
      <List jobList={jobList} />
    </div>
  );
}

export default App;
