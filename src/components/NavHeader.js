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
        {/*
        <div className="is-center">
          <a href="/" className="format-disabled">
            HOW IT WORKS ⁉️
          </a>
        </div> */}
        <style jsx>{`
          .logo-wrapper h1 {
            font-family: Seravek;
            color: white;
          }

          .nav-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
        `}</style>
      </div>
    );
  }
}
export default NavHeader;
