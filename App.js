import axios from 'axios';
import { Table } from 'antd';
import React, { useEffect, useState } from "react";


import { Layout, Menu } from 'antd';
const {  Content, Sider } = Layout;







const items1 = ['All', 'Name', 'Age'].map((key) => ({
  key,
  label: `${key}`,
}));





export default function App() {
  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [columnData, setColumnData] = useState([]);




  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Age',
      dataIndex: 'Age',
      key: 'Age',
    }

  ];

  const Name_columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    }
  ];


  const Age_columns = [
    {
      title: 'Age',
      dataIndex: 'Age',
      key: 'Age',
    }
  ];



  useEffect(() => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://gsx2json.com/api?id=1eu9XObpXslv49dyJWHSX85FFvf9JxvNzacvcqcCcwNU&colums=false&sheet=Sheet1',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.rows);
        setData(response.data.rows);
        setTableData(response.data.rows);
        setColumnData(columns);
      })
      .catch(function (error) {
        console.log(error);
      });


  }, []);
  console.log("data", data);

  const handleClick = (e) => {
    let new_data = [];
    let table_data = data;
    console.log("Name is abc", e, tableData);
    if (e.toLowerCase() === "all") {
      setColumnData(columns)
      setTableData(table_data)
    }
    else if (e.toLowerCase() === "name") {
      setColumnData(Name_columns)
      




      for (let i = 0; i < tableData.length; i++) {
        new_data[i] = {
          Name: table_data[i].Name
        };

      }




      
      setTableData(new_data);
    }
    else {
      setColumnData(Age_columns)
      for (let i = 0; i < tableData.length; i++) {
        new_data[i] = {
          Age: table_data[i].Age
        };

      }
     
      setTableData(new_data);
    }

  }



  return (

    <>


      <Layout>

        <Content
          style={{
            padding: '0 50px',
          }}
        >

          <Layout
            style={{
              padding: '24px 0',

            }}
          >
            <Sider
              style={{

              }}
              width={200}
            >
              <Menu
                mode="inline"
                theme='dark'
                onSelect={
                  (e) => { handleClick(e.key) }
                }
                style={{
                  height: '100%',
                }}
                items={items1}
              />
            </Sider>
            <Content
              style={{
                padding: '0 24px',
                minHeight: 280,
              }}
            >
              <h1>Data from google sheets</h1>

              <Table dataSource={tableData} columns={columnData} />;
            </Content>
          </Layout>
        </Content>

      </Layout>








    </>

  );
}
