import React from "react";

//import components
import NavHeader from "../src/components/NavHeader";
import Dashboard from "../src/components/Dashboard";

class App extends React.Component {
  render() {
    return (
      <div className="is-dark bg-is-dark">
        <NavHeader />
        <Dashboard />

        <style global jsx>{`
          body {
            font-family: avenir, proxima nova, helvetica neue, Helvetica, Arial,
              sans-serif;
            font-weight: 400;
            margin: 0;
            font-size: 20px;
            -webkit-font-smoothing: antialiased;
            background-color: white;
            min-width: 1200px;
          }

          .bg-is-dark {
            background-color: black;
          }

          .format-disabled {
            text-decoration: none;
            list-style: none;
            color: white;
          }

          .hide {
            display: none;
          }
          .show {
            display: block;
          }

          .hide-w-opacity {
            opacity: 0;
          }

          .show-w-opacity {
            opacity: 1;
          }

          .animated-transition {
            transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .m-container {
            padding: 0px 40px;
            min-width: 1200px;
          }

          .sm-container {
            padding: 0px 100px;
          }

          .is-center {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .demo-btn {
            cursor: pointer;
            color: #14f1d9;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 20px;
            border-radius: 12px;
            border: 1px solid black;
            transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
            padding: 10px;
            font-weight: 700;
            border: none;
          }

          .demo-btn:hover {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
            transform: translateY(-10px);
            color: white;
            background-color: #14f1d9;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
