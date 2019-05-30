import React from "react";

//import components
import Card from "./Card";

class Dashboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="stripe-container">
          <h2>Source: Stripe</h2>
          <div className="cards-container">
            <Card cardName="recurring revenue" money="1370000" />
            <Card cardName="expenses" money="35573" />
            <Card cardName="net revenue" money="1270000" />
            <Card cardName="revenue per customer" money="58" />
          </div>
        </div>
        <div className="stripe-container">
          <h2>Source: Braintree</h2>
          <div className="cards-container">
            <Card cardName="recurring revenue" money="1370000" />
            <Card cardName="expenses" money="35573" />
            <Card cardName="net revenue" money="1270000" />
            <Card cardName="revenue per customer" money="58" />
          </div>
        </div>

        <style jsx>{`
          .dashboard-container {
            min-width: 1200px;

            background-color: #202020;
            padding: 20px 20px;
          }

          .cards-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;
          }
        `}</style>
      </div>
    );
  }
}
export default Dashboard;
