import React from "react";

//import components
import Card from "./Card";
import { readFile } from "fs";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      object: ""
    };
  }

  getDataFromSheet = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log("data:  ", data);
        /*
        this.setState({ object: data });
        let batchRowValues = data.valueRanges[0].values;
        const rows = [];
        for (let i = 1; i < batchRowValues.length; i++) {
          let rowObject = {};
          for (let j = 0; j < batchRowValues[i].length; j++) {
            rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
          }
          rows.push(rowObject);
        }

        // dropdown options
        let dropdownOptions = [];

        for (let i = 0; i < rows.length; i++) {
          dropdownOptions.push(rows[i].month);
        }

        dropdownOptions = Array.from(new Set(dropdownOptions)).reverse(); */
      });
  };

  componentDidMount() {
    //hide API key, not working tho
    //const API_KEY = `${process.env.API_KEY}`;
    const API_KEY = "AIzaSyAk0svS0tjBgrZ4ywig4RY9wd3rrhGBaig";
    const initSheetID = "1sCgmzBIq2K9jUckLuYSWbDq4CuNUfdtuE6a5xI3I5Hw";
    const initUrl = `https://sheets.googleapis.com/v4/spreadsheets/${initSheetID}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${API_KEY}`;
    this.getDataFromSheet(initUrl);
  }

  uploadSheet = url => {
    const API_KEY = "AIzaSyAk0svS0tjBgrZ4ywig4RY9wd3rrhGBaig";
    const sheetID = "1hJxwr-ydhxO4g0upUlfT19BDT9YJilxIW3779DS2djk";
    const newUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${API_KEY}`;
    this.getDataFromSheet(newUrl);
  };

  //functions to compute data
  getNetRevenue = (rec_rev, expenses, refunds) => {
    let net_rev = 0;
    net_rev = rec_rev - expenses - refunds;
    console.log("NET REVENUE: ", net_rev);
  };

  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-header m-container">
          <h2>DASHBOARD</h2>
          <div className="upload-btn-wrapper">
            <button className="upload-btn" onClick={this.uploadSheet}>
              UPLOAD YOUR SHEET
            </button>
          </div>
        </div>
        <div className="m-container">
          <h2>
            Source: <span className="txt-is-pink">Stripe</span>{" "}
          </h2>
          <div className="cards-container ">
            <Card cardName="recurring revenue" type="bar-chart" />
            <Card cardName="expenses" type="bar-chart" />
            <Card cardName="refunds" type="bar-chart" />
            <Card cardName="net revenue" type="bar-chart" />
          </div>
        </div>
        <div className="m-container">
          <h2>
            Source: <span className="txt-is-pink">Braintree</span>
          </h2>
          <div className="cards-container">
            <Card cardName="recurring revenue" />
            <Card cardName="expenses" />
            <Card cardName="refunds" />
            <Card cardName="net revenue" />
          </div>
        </div>

        <div className="m-container">
          <h2>
            Source: <span className="txt-is-pink">Recurly</span>
          </h2>
          <div className="cards-container">
            <Card cardName="recurring revenue" />
            <Card cardName="expenses" />
            <Card cardName="refunds" />
            <Card cardName="net revenue" />
          </div>
        </div>

        <style jsx>{`
          .dashboard-container {
            min-width: 1200px;
            background-color: #f7f7fc;
            padding-bottom: 30px;
          }

          .cards-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 30px;
          }

          .dashboard-header {
            background-color: #14f1d9;
            color: white;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }

          .upload-btn {
            cursor: pointer;
            color: white;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 20px;
            border-radius: 12px;
            background-color: transparent;
            transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
            padding: 10px;
            font-weight: 700;
            border: none;
          }

          .upload-btn:hover {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
            transform: translateY(-10px);
            color: black;
            background-color: white;
          }

          .upload-btn-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    );
  }
}
export default Dashboard;
