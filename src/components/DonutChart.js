import React, { Component } from "react";
import Chart from "react-apexcharts";

class DonutChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: [
          "Cancelled Customers last 30 days",
          "Active Customers last 30 days"
        ],
        colors: ["#FF004D", "#14f1d9"],
        plotOptions: {
          pie: {
            size: undefined,
            customScale: 1,
            offsetX: 0,
            offsetY: 0,
            expandOnClick: false,
            dataLabels: {
              expandOnClick: false,
              show: false,
              offset: 0,
              minAngleToShowLabel: 10
            },
            donut: {
              size: "70%",
              show: false,
              background: "transparent",
              value: {
                show: false
              },
              labels: {
                show: true,
                total: {
                  show: true,
                  label: "Active Customers 30 days ago",
                  color: "#14f1d9",
                  formatter: function(w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0);
                  }
                }
              }
            }
          }
        }
      },
      series: [1000, 22936]
    };
  }

  update = () => {
    let newSeries = [];
    const max = 5000;
    newSeries = this.state.series.map(s =>
      Math.floor(Math.random() * Math.floor(max))
    );
    this.setState({
      series: newSeries
    });
  };

  render() {
    return (
      <div className="donut-container">
        <button className="demo-btn" onClick={this.update}>
          DEMO
        </button>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="650"
        />
        <style jsx>{``}</style>
      </div>
    );
  }
}

export default DonutChart;
