import React from "react";

//import components
import Card from "./Card";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      showSheetInput: false,
      inputPlaceholder: "Google Sheet ID",
      inputVal: "",
      currentSheetID: ""
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

  componentWillMount() {
    const initSheetID = "1sCgmzBIq2K9jUckLuYSWbDq4CuNUfdtuE6a5xI3I5Hw";
    this.setState({ currentSheetID: initSheetID });
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

  handleSubmit = event => {
    event.preventDefault();
    const input = this.state.inputVal;
    this.setState({ currentSheetID: input });
  };

  toggleSheetInput = () => {
    this.setState({ showSheetInput: !this.state.showSheetInput });
  };

  handleChange = event => {
    this.setState({ inputVal: event.target.value });
  };

  componentDidUpdate() {
    console.log("updated state: ", this.state);
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="m-container dashboard-header">
          <div>
            <h2>DASHBOARD</h2>
          </div>
          <div
            className={
              this.state.showSheetInput
                ? "show-w-opacity is-center animated-transition"
                : "hide-w-opacity is-center animated-transition"
            }
          >
            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  type="text"
                  className="input"
                  placeholder={this.state.inputPlaceholder}
                  value={this.state.inputVal}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" className="submit-btn" />
            </form>
          </div>
          <div className="is-center">
            <button className="action-btn" onClick={this.toggleSheetInput}>
              UPLOAD YOUR SHEET
            </button>
          </div>
        </div>
        <div className="m-container">
          <h2>
            Current Sheet ID:
            <span className="sheetID-wrapper">{this.state.currentSheetID}</span>
          </h2>
          <h2>
            Source: <span className="txt-is-pink">Stripe</span>{" "}
          </h2>
          <div className="cards-container">
            <Card cardName="recurring revenue" type="bar-chart" />
            <Card cardName="expenses" type="bar-chart" />
            <Card cardName="refunds" type="bar-chart" />
            <Card cardName="net revenue" type="bar-chart" />
            <Card cardName="user churn" type="donut-chart" />
            <Card cardName="revenue churn" type="donut-chart" />
          </div>
        </div>
        <div className="m-container">
          <h2>
            Source: <span className="txt-is-pink">Braintree</span>
          </h2>
          <div className="cards-container">
            <Card cardName="recurring revenue" type="bar-chart" />
            <Card cardName="expenses" type="bar-chart" />
            <Card cardName="refunds" type="bar-chart" />
            <Card cardName="net revenue" type="bar-chart" />
            <Card cardName="user churn" type="donut-chart" />
            <Card cardName="revenue churn" type="donut-chart" />
          </div>
        </div>

        <div className="m-container">
          <h2>
            Source: <span className="txt-is-pink">Recurly</span>
          </h2>
          <div className="cards-container">
            <Card cardName="recurring revenue" type="bar-chart" />
            <Card cardName="expenses" type="bar-chart" />
            <Card cardName="refunds" type="bar-chart" />
            <Card cardName="net revenue" type="bar-chart" />
            <Card cardName="user churn" type="donut-chart" />
            <Card cardName="revenue churn" type="donut-chart" />
          </div>
        </div>

        <style jsx>{`
          .dashboard-container {
            background-color: #f7f7fc;
            padding-bottom: 30px;
            min-width: 1200px;
          }

          .cards-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 10px;
          }

          .dashboard-header {
            background-color: #14f1d9;
            color: white;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }

          .action-btn {
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

          .action-btn:hover {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
            transform: translateY(-10px);
            color: black;
            background-color: white;
          }

          .input {
            padding: 12px 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 200px;
            height: 30px;
          }

          .sheetID-wrapper {
            color: #14f1d9;
            padding-left: 10px;
          }
          .submit-btn {
            cursor: pointer;
            color: white;
            text-align: center;
            text-decoration: none;
            font-size: 22px;
            border-radius: 12px;
            background-color: transparent;
            transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
            font-weight: 700;
            border: none;
            margin-left: 5px;
          }
          .submit-btn:hover {
            transform: scale(1.3);
          }
        `}</style>
      </div>
    );
  }
}
export default Dashboard;
