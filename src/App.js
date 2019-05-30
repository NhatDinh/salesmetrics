import React from "react";

//import components
import NavHeader from "../src/components/NavHeader";
import Dashboard from "../src/components/Dashboard";

function App() {
  return (
    <div className="is-dark bg-is-dark">
      <NavHeader />
      <Dashboard />
      <style global jsx>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          margin: 0;
          font-size: 20px;
          -webkit-font-smoothing: antialiased;
          background-color: black;
          color: #586371;
          height: 1000vh;
        }

        .bg-is-dark {
          background-color: black;
        }

        .format-disabled {
          text-decoration: none;
          list-style: none;
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
      `}</style>
    </div>
  );
}

export default App;
