import React from "react";

class NavHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="m-container nav-container">
        <div className="logo-wrapper">
          <a href="/" className="format-disabled">
            <h1>salesmetrics</h1>
          </a>
        </div>
        <style jsx>{`
          .logo-wrapper h1 {
            font-family: Seravek;
            color: #14f1d9;
          }

          .nav-container {
            background-color: white;
            min-width: 1200px;
          }
        `}</style>
      </div>
    );
  }
}
export default NavHeader;
