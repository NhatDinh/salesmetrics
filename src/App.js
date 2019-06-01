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
            background-color: black;
            color: #586371;
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

          .m-container {
            padding: 0px 40px;
            min-width: 1000px;
          }

          .sm-container {
            padding: 0px 100px;
          }

          .is-center {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
