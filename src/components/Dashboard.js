import React from "react";

class Dashboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="m-container dashboard-container">
        <style jsx>{`
          .upload-btn {
            cursor: pointer;
            color: white;
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
          }

          .upload-btn:hover {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
            transform: translateY(-10px);
            color: black;
            background-color: white;
          }
          .logo-wrapper h1 {
            font-family: Seravek;
            color: white;
          }

          .nav-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
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
