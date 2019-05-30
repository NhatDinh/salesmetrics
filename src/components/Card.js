import React from "react";

class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        <h4>{this.props.cardName}</h4>
        <h2>$ {this.props.money}</h2>
        <style jsx>{`
          .card {
            width: 300px;
            height: 200px;
            position: relative;
            overflow: hidden;
            border-radius: 20px;
            box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.15);
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            cursor: pointer;
            background-color: black;
            padding: 10px 20px;
            color: white;
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
