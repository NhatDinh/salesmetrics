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
          name: "",
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
        <button className="btn" onClick={this.update}>
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
        <style jsx>
          {`
            .btn {
              cursor: pointer;
              color: black;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 20px;
              border-radius: 12px;
              border: 1px solid black;
              background-color: transparent;
              transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
              padding: 10px;
              font-weight: 700;
              border: none;
            }

            .btn:hover {
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
              transform: translateY(-10px);
              color: black;
              background-color: white;
            }
          `}
        </style>
      </div>
    );
  }
}

export default BarChart;
