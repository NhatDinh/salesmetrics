import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        dataLabels: { enabled: false },
        chart: {
          id: "basic-bar",
          type: "area",
          width: "500"
        },
        colors: ["#14f1d9"],
        xaxis: {
          labels: {
            show: false
          }
        },
        grid: {
          show: true,
          borderColor: "#90A4AE",
          strokeDashArray: 0,
          position: "back",
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          },
          row: {
            colors: undefined,
            opacity: 0.5
          },
          column: {
            colors: undefined,
            opacity: 0.5
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },

      series: [
        {
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  update = () => {
    const newSeries = [];
    const max = 13700000;

    this.state.series.map(s => {
      const data = s.data.map(() => {
        return Math.floor(Math.random() * Math.floor(max));
      });
      newSeries.push({ data, name: s.name });
    });

    this.setState({
      series: newSeries
    });
  };

  render() {
    return (
      <div className="barchart-container">
        <button className="demo-btn" onClick={this.update}>
          DEMO
        </button>
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              colors={this.state.colors}
              type="area"
            />
          </div>
        </div>
        <style jsx>{``}</style>
      </div>
    );
  }
}

export default BarChart;
