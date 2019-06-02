import React from "react";

import BarChart from "./BarChart";
import DonutChart from "./DonutChart";

class Card extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="card">
        <h4>{this.props.cardName}</h4>
        <div className={this.props.type === "bar-chart" ? "show" : "hide"}>
          <BarChart />
        </div>
        <div className={this.props.type === "donut-chart" ? "show" : "hide"}>
          <DonutChart />
        </div>

        <style jsx>{`
          .card {
            position: relative;
            overflow: hidden;
            border-radius: 20px;
            box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.15);
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            cursor: pointer;
            background-color: black;
            padding: 10px 20px;
            color: black;
            background-color: white;
            min-width: 550px;
          }

          .card h4 {
            text-transform: uppercase;
          }
        `}</style>
      </div>
    );
  }
}
export default Card;
