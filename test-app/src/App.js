import "./App.css";
import Table from "./components/Table";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const data = [
    {
      id: 1,
      hostname: "host1.example.com",
      ip: "192.168.1.1",
      status: "Online",
    },
    {
      id: 2,
      hostname: "host2.example.com",
      ip: "192.168.1.2",
      status: "Offline",
    },
    {
      id: 3,
      hostname: "host3.example.com",
      ip: "192.168.1.3",
      status: "Online",
    },
    {
      id: 4,
      hostname: "host4.example.com",
      ip: "192.168.1.4",
      status: "Offline",
    },
    {
      id: 5,
      hostname: "host5.example.com",
      ip: "192.168.1.5",
      status: "Online",
    },
    {
      id: 5,
      hostname: "host5.example.com",
      ip: "192.168.1.5",
      status: "Online",
    },
    {
      id: 5,
      hostname: "host5.example.com",
      ip: "192.168.1.5",
      status: "Online",
    },
    {
      id: 5,
      hostname: "host5.example.com",
      ip: "192.168.1.5",
      status: "Online",
    },
    {
      id: 5,
      hostname: "host5.example.com",
      ip: "192.168.1.5",
      status: "Online",
    },
    {
      id: 5,
      hostname: "host5.example.com",
      ip: "192.168.1.5",
      status: "Online",
    },
    {
      id: 5,
      hostname: "host5.example.com",
      ip: "192.168.1.5",
      status: "Online",
    },
    {
      id: 5,
      hostname: "host5.example.com",
      ip: "192.168.1.5",
      status: "Online",
    },
    {
      id: 5,
      hostname: "host5.example.com",
      ip: "192.168.1.5",
      status: "Online",
    },
  ];

  const [hostData, setHosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          " https://oligolabs.ae/zabbix/api_jsonrpc.php",
          {
            jsonrpc: "2.0",
            method: "user.get",
            params: {
              filter: {
                host: ["Zabbix server", "Linux server"],
              },
            },
            id: 1,
            auth: "21dde15c2566092e3effac499981aa4c78dff4690ba2e34256fa2b7a9f858f03",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setHosts(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(hostData, "the data....");

  return (
    <div className="root-container">
      <div className="main-container">{/* <Table data={hostData} /> */}</div>
    </div>
  );
}

export default App;
